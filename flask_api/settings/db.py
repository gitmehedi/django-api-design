import os
import psycopg2
from dotenv import load_dotenv

# Environment Variable Configuration
# ===============================================
load_dotenv()


# Database Configuration
# ===============================================


class DB(object):
    def __init__(self):
        self.host = os.getenv('PG_HOST')
        self.port = os.getenv('PG_PORT')
        self.user = os.getenv('PG_USER')
        self.password = os.getenv('PG_PASSWORD')
        self.database = os.getenv('PG_DB')
        self.conn = ''
        self.cr = ''

    def connect(self):
        self.conn = psycopg2.connect(host=self.host,
                                     port=self.port,
                                     user=self.user,
                                     password=self.password,
                                     database=self.database)

    def cursor(self):
        self.connect()
        self.cr = self.conn.cursor()

    def commit(self):
        self.conn.commit()

    def close(self):
        self.cr.close()
        self.conn.close()

    def execute(self, query):
        self.cursor()
        self.cr.execute(query)
        self.commit()
        return self.cr
