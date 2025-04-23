import { D1Orm, DataTypes, Model } from "d1-orm";

export async function onRequest(context) {
    const orm = new D1Orm(context.env.FormalizeDB);
    const users = new Model(
        {
            D1Orm: orm,
            tableName: "Users",
            primaryKeys: "id",
            autoIncrement: "id",
            uniqueKeys: [["uid","email"]],
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
    );

    //const result = await users.CreateTable({ strategy: "force"});
    const result = await users.InsertOne({
        uid: "ABCD",
        name: "Jonathan",
        email: "jon@gmail.com",
        password: "jon",
        lastSeen: "yesterday"
    })
  
    return Response.json(result);
}