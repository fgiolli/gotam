# GOTAM

GOTAM es una aplicación CRUD que permite mostrar, dar de baja y dar de alta empleados

## Instalación
 Opcion 1 GIT:

```bash
git clone https://github.com/fgiolli/gotam.git
cd gotam
```
Opcion 2: 
[Descargar](https://github.com/fgiolli/gotam.git)

## Iniciar aplicación

Desde la carpeta raíz de gotam

1.Backend
```bash
node server.js
```

2.Frontend
```bash
cd client && ng build
```

## DER, Diagrama de entidad-relacion
![Empleado belongs to Area](der.png)

## API Usage
1. Empleados

1.1 GET: Obtiene una lista con todos los empleados.

```bash
/api/empleados
```

1.2 POST: Permite crear o dar de alta un empleado.
```bash
/api/empleados
```
El cuerpo debe tener las siguientes propiedades
```bas
fullname (string), dni (int), date_birth(date (YYYY-MM-DD)), developer (string), description (string), areaID (int)
```
Incluir las propiedades en el cuerpo de la peticion.

1.3 PUT: Permite actualizar los valores de un (id) empleado.
```bash
/api/empleados/:id
```
Parametro id: ID empleado.


1.4 DELETE: Permite eliminar un empleado
```bash
/api/empleados/:id
```
Parametro id: ID empleado.
