#Trabajo Practico 1

* Nombre del grupo: LAJ
* Integrantes: Lucas Juarez
* Descripción del negocio: Servicio para la administración y monitoreo de backups en bases de datos

Guarda los datos en una base local MongoDB. Utiliza express / bodyParser y mongoose

Endpoints

GET
* http://localhost:1234/backups/  //Lista todos los backups guardados
* http://localhost:1234/backups/:id  //Lista un backup en particular, por su ID
* http://localhost:1234/backups?dbname='ORCL'&backupSizeMb>500  //Lista los backups mayores a 500MB

POST
* http://localhost:1234/backups/create   //Guarda en MongoDB un nuevo backup. Al body del request se le deben pasar las siguientes variables
  id
  vendor
  dbname
  backupDate
  elapsedTimeMin
  backupSizeMb
  
PUT
* http://192.168.0.182:1234/backups/:id/update  //Actualiza en MongoDB un backup en base al ID que se le pasa como parámetro. Al body del request se le puede pasar cualquiera de las variables mencionadas en el POST

DELETE
* http://192.168.0.182:1234/backups/:id/delete  //Elimina de MongoDB el backup que se le pasó por parámetro.


