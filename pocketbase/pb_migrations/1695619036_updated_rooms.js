/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  collection.listRule = null
  collection.viewRule = "@request.auth.id != \"\""

  // remove
  collection.schema.removeField("rdgxo2il")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  collection.listRule = ""
  collection.viewRule = "@request.auth.id ?= users.id || @request.auth.id = host.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rdgxo2il",
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
})
