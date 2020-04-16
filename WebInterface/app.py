from flask import Flask, jsonify, render_template
from bs4 import BeautifulSoup as bs
import requests
import operator

import time
import pandas as pd
import datetime as dt
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo
from config import dbkey

# conn2 = f"mongodb://heroku_app:{dbkey}@dwelling-db-shard-00-00-yfzol.gcp.mongodb.net:27017,dwelling-db-shard-00-01-yfzol.gcp.mongodb.net:27017,dwelling-db-shard-00-02-yfzol.gcp.mongodb.net:27017/test?ssl=true&replicaSet=dwelling-db-shard-0&authSource=admin&retryWrites=true&w=majority"
# conn2 = f"mongodb://heroku_app:{dbkey}@dwelling-db-shard-00-00-yfzol.gcp.mongodb.net:27017,dwelling-db-shard-00-01-yfzol.gcp.mongodb.net:27017,dwelling-db-shard-00-02-yfzol.gcp.mongodb.net:27017/test?ssl=true&replicaSet=dwelling-db-shard-0&authSource=admin&retryWrites=true&w=majority"
conn2 = f"mongodb+srv://heroku_app:{dbkey}@dwelling-db-yfzol.gcp.mongodb.net/test?retryWrites=true&w=majority"

client = pymongo.MongoClient(conn2)
db = client.Dwelling_db


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')



@app.route("/heat")
def heat():
    # Create connection variable
    # conn2 = 'mongodb://localhost:27017'
    munis = []

    # Pass connection to the pymongo instance.
    client2 = pymongo.MongoClient(conn2)

    # Connect to a database. Will create one if not already available.
    db2 = client2.Dwelling_db
    
    munis = [doc for doc in db2.HeatSource.find({}, {'_id':False})]
    
    return jsonify(munis)

@app.route("/dscore")
def dScore():
    # Create connection variable
    # conn2 = 'mongodb://localhost:27017'
    dScores = []

    # Pass connection to the pymongo instance.
    client2 = pymongo.MongoClient(conn2)

    # Connect to a database. Will create one if not already available.
    db2 = client2.Dwelling_db
    
    dScores = [doc for doc in db2.Summary.find({}, {'_id':False})]
    
    return jsonify(dScores)

@app.route("/hs/<muni>")
def highSchoolMarkers(muni):
    # Create connection variable
    # conn2 = 'mongodb://localhost:27017'
    schools = []

    # Pass connection to the pymongo instance.
    client2 = pymongo.MongoClient(conn2)

    # Connect to a database. Will create one if not already available.
    db2 = client2.Dwelling_db
    
    schools = [doc for doc in db2.high_school.find({"Municipal ID": int(muni)}, {'_id':False})]
    
    return jsonify(schools)



@app.route("/bs/<muni>")
def busStopsCity(muni):
    busStops = []

    # Pass connection to the pymongo instance.
    client2 = pymongo.MongoClient(conn2)
    # Connect to a database. Will create one if not already available.
    db2 = client2.Dwelling_db
    busStops = [doc for doc in db2.Bus_stops.find({"MUNID": int(muni)}, {'_id':False})]
    # busStops = [doc for doc in db2.Bus_stops.find({}, {'_id':False})]
    
    return jsonify(busStops)


@app.route("/rrs/<muni>")
def trainStopsCity(muni):

    # Create connection variable
    trains = []

    # Pass connection to the pymongo instance.
    client2 = pymongo.MongoClient(conn2)
    
    db2 = client2.Dwelling_db
    trains = [doc for doc in db2.Rail_stops.find({"Muni Code": int(muni)}, {'_id':False})]

    return jsonify(trains)


if __name__ == "__main__":
    app.run(debug=True)
