from flask import Flask, render_template, request
from pymongo import MongoClient

app = Flask("mywebsite", template_folder=".")

database_client = MongoClient( "mongodb://DBuser:password123@ds139327.mlab.com:39327/hackbudemo" )

database = database_client.hackbudemo
collection = database.tanner_collection

@app.route('/saveitem')
def saveitem():
  item = request.args["item"]
  item_object = {"item": item}
  collection.insert_one(item_object)
  return "item '%s' inserted!" % item

@app.route('/loaditems')
def loaditems():
  final_list = []
  for object in collection.find():
    final_list.append(item_object['item'])
  return json.dumps(final_list)

@app.route('/')
def index():
  return render_template('index.html')

app.run(debug=True)
