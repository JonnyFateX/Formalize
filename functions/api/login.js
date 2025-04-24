import { D1Orm, DataTypes, Model } from "d1-orm";

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
    try{
        const response = await users.First({
            where:{
                email: data.email,
                password: data.password
            }
        })
        if(!response){
            return new Response({ error: "Wrong credentials" }, {
                status: 409,
                "Content-Type": "application/json"
            })
        }else{
            let date = new Date().toString()
            const lastSeen = date.substring(0, date.indexOf("(") - 1)
            await users.Update({
                where: {
                    uid: response.uid
                },
                data: {
                    lastSeen: lastSeen
                },
            })
            return Response.json({
                uid: response.uid,
                name: response.name,
                email: response.email,
            })
        }
        
    }catch(error){
        return new Response({ error: "Unknown error" }, {
            status: 409,
            "Content-Type": "application/json"
        })
    }
}