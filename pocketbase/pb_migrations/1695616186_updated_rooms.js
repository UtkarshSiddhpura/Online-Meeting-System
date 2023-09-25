/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  collection.listRule = ""
  collection.viewRule = "@request.auth.id ?= users.id || @request.auth.id = host.id"
  collection.createRule = "@request.auth.id = host.id"
  collection.updateRule = "@request.auth.id = host.id"
  collection.deleteRule = "@request.auth.id = host.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sq36sqn3mnppfaw")

  collection.listRule = null
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
