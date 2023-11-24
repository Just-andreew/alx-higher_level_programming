#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    # Get arguments from user
    username = "root"
    password = "root"
    database = "hbtn_0e_0_usa"
    state_name = "'Arizona'"

    # Connect to MySQL server
    db = MySQLdb.connect(host="localhost",
                         port=3306,
                         user=username,
                         passwd=password,
                         db=database)

    # Create a cursor object
    cursor = db.cursor()

    # Prepare SQL query
    sql = """
        SELECT * FROM states
        WHERE name = {}
        ORDER BY states.id ASC
    """

    # Execute query
    cursor.execute(sql.format(state_name))

    # Fetch all results from the cursor
    results = cursor.fetchall()

    # Print results
    for row in results:
        print(row)

    # Close the database connection
    db.close()
