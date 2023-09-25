/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tce5mcf03xtocgl",
    "created": "2023-09-24 07:57:21.707Z",
    "updated": "2023-09-24 07:57:21.707Z",
    "name": "UserRooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "levhe4ql",
        "name": "userID",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "zkpwbvbf",
        "name": "roomID",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "sq36sqn3mnppfaw",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl");

  return dao.deleteCollection(collection);
})
