/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "npmpwax5",
    "name": "peerData",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  // remove
  collection.schema.removeField("npmpwax5")

  return dao.saveCollection(collection)
})
