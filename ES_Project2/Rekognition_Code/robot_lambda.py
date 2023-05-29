import psycopg2, pprint
from psycopg2.extras import RealDictCursor
import json


endpoint = "relationaldb.cdi3uyljvemz.us-east-1.rds.amazonaws.com"
username = "postgres"
password = "postgres"
database_name = "postgres"

connection = psycopg2.connect(host=endpoint, 
                        database = database_name,
                        user=username, 
                        password=password)

def lambda_handler(e, context):

    cur = connection.cursor(cursor_factory = RealDictCursor)
    sql = "UPDATE  api_purchase SET purchase_status = %s WHERE id = %s"
    cur.execute(sql, (e["action"], e["id"]))
    connection.commit()
    
    if(e["action"] == "Retrieve"):
        e["action"] = "Deliver"    
    elif(e["action"] == "Deliver"):
        e["action"] = "Complete"
    else:
        e["action"] = ""

    json_result = json.dumps(e)
    return json_result

