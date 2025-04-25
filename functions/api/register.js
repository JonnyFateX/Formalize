import { D1Orm, DataTypes, Model } from "d1-orm";
import { nanoid } from 'nanoid'

export async function onRequestPost(context) {
    const orm = new D1Orm(context.env.FormalizeDB)
    const users = new Model(
        {
            D1Orm: orm,
            tableName: "Users",
            primaryKeys: "id",
            autoIncrement: "id",
            uniqueKeys: [["email"]],
        },
        {
            id: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            uid: {
                type: DataTypes.STRING,
                notNull: true,
            },
            name: {
                type: DataTypes.STRING,
                notNull: true,
            },
            email: {
                type: DataTypes.STRING,
                notNull: true,
            },
            password: {
                type: DataTypes.STRING,
                notNull: true,
            },
            lastSeen: {
                type: DataTypes.STRING,
                notNull: true,
            },
        }
    )

    const data = await context.request.json()
    let date = new Date().toString()
    const uid = nanoid()
    const lastSeen = date.substring(0, date.indexOf("(") - 1)
    try{
        await users.InsertOne({
            uid: uid,
            name: data.name,
            email: data.email,
            password: data.password,
            lastSeen: lastSeen,
        })
        return Response.json({
            uid: uid,
            name: data.name,
        })
    }catch(error){
        return new Response({ error: "Email already in use" }, {
            status: 409,
            "Content-Type": "application/json"
        })
    }
}