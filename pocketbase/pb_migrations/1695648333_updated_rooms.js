/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pa6vdn8x",
    "name": "peerID",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  // remove
  collection.schema.removeField("pa6vdn8x")

  return dao.saveCollection(collection)
})
