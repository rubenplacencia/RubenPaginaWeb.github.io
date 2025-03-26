import psycopg2
from flask import Flask, jsonify

app = Flask(__name__)

# Conexión a la base de datos PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",           # Si PostgreSQL está en tu misma máquina, usa "localhost"
        database="ruben_web",       # El nombre de tu base de datos
        user="postgres",          # Tu usuario de PostgreSQL
        password="Antonio09"    # Tu contraseña de PostgreSQL
    )
    return conn

# Ruta de ejemplo para obtener datos desde la base de datos
@app.route('/data')
def get_data():
    conn = get_db_connection()    # Establecer la conexión
    cur = conn.cursor()           # Crear un cursor
    cur.execute("SELECT * FROM comentarios where nombre like '%R%'")  # Consulta SQL (reemplaza 'tu_tabla' por el nombre de tu tabla)
    rows = cur.fetchall()         # Obtener todos los resultados de la consulta
    cur.close()                   # Cerrar el cursor
    conn.close()                  # Cerrar la conexión
    
    return jsonify(rows)          # Devolver los resultados en formato JSON

if __name__ == '__main__':
    app.run(debug=True)
