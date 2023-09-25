/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rssgabkg",
    "name": "users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  // remove
  collection.schema.removeField("rssgabkg")

  return dao.saveCollection(collection)
})
