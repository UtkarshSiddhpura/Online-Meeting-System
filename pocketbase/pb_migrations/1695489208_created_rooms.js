/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sq36sqn3mnppfaw",
    "created": "2023-09-23 17:13:28.816Z",
    "updated": "2023-09-23 17:13:28.816Z",
    "name": "rooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8hpknd5o",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw");

  return dao.deleteCollection(collection);
})
