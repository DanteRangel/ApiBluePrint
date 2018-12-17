FORMAT: 1A
HOST: http://distroller.red-wolf.com.mx
#  API School Payment
[Markdown](http://daringfireball.net/projects/markdown/syntax) **formatted** description.

API de consulta para la plataforma de distroller


## Group Usuarios
Grupo de todos los recursos para los usuarios.. Es **reconocido** por el **keyword `grupo`**  `Usuarios`.


## Login Usuarios [/api/login]

### Login de usuarios [POST]

+ Request (application/json)

        {
            "email": "correo@ejemplo.com",
            "password": "1234567"
        }

+ Response 200 (application/json)
        {
            "response": "success",
            "id": 1,
            "result": {
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kaXN0cm9sbGVyLnJlZC13b2xmLmNvbS5teFwvYXBpXC9sb2dpbiIsImlhdCI6MTU0MjM4NjY0NywiZXhwIjoxNTQyMzkwMjQ3LCJuYmYiOjE1NDIzODY2NDcsImp0aSI6InBSMUNpdFczODRDMll4VzUiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.2z3hRS5uQBD-4Mn6ZfVYnLfkWcm9ZxfAQd7LiahI5rw"
            }
        }
+ Response 200 (application/json)
        {
            "response": "error",
            "message": "invalid_email_or_password"
        }


## Usuarios Register [/api/register]

### Registro de Usuarios [POST]

Esta accion registra usuarios y sus chilpas
+ Request (application/json)

    {
    "name": "Nombre Ejemplo",
    "email": "correo22@ejemplo.com",
    "password": "1234567",
    "password_confirmation": "1234567",
    "alias": "Alias user",
    "chilpas": [
        {
        "nombre": "Chilpa 1 ",
        "edad": 2,
        "genero": "F"
        },
        {
        "nombre": "Chilpa N ",
        "edad": 3,
        "genero": "M"
        }
    ]
    }


+ Response 200 (application/json)
    {
        "response": "success",
        "id": 87,
        "result": {
            "token": "eyJ0eXAiOiJKV1QiLCJhbGc..."
        }
    }
+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "email": [
                "El campo email ya ha sido tomado."
            ]
        },
        "rol": "padre"
    }
 
+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "genero": [
                "Especifica si es leidi o bambino"
            ]
        },
        "rol": "chilpa_0"
    }

## Usuarios Reset Password [/api/reset/password]

### Restaurar contraseña de Usuarios [POST]

Esta accion envia un correo para restaurar la contraseña
+ Request (application/json)

    {
        "email": "correo@ejemplo.com"
    }


+ Response 200 (application/json)
   {
        "response": "success",
        "message": "Te hemos enviado un correo"
    }

+ Response 200 (application/json)
    {
        "response": "error",
        "errors": {
            "email": [
                "El campo email seleccionado es inválido."
            ]
        }
    }


## Group Chilpas
Grupo de todos los recursos para de los chilpas.. Es **reconocido** por el **keyword `grupo`**  `Chilpas`.

## Chilpas get chilpa [/api/chilpa/infoChilpa]


### Obtener informacion de un chilpa [POST]

Esta accion obtiene la informacion de un chilpa

+ Request (application/json)

    {
        "idChilpa": 1
    }


+ Response 200 (application/json)
   {
        "id": 1,
        "nombre": "Miss Kenna Hayes",
        "genero": "M",
        "edad": 3,
        "status": 1,
        "usoWeb": 7,
        "usoAndroid": 3,
        "usoIos": 1,
        "dificultad": null,
        "user_id": 20,
        "color_id": 2,
        "mascota_id": 2,
        "comida_id": 2,
        "avatar_id": 1,
        "fecha_ultima_sesion": "2005-11-07 17:54:33",
        "deleted_at": null,
        "created_at": "2018-08-10 16:22:02",
        "updated_at": "2018-08-10 16:22:02"
    }
+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "idChilpa": [
                "El campo id chilpa es requerido."
            ]
        }
    }
+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "idChilpa": [
                "El campo id chilpa seleccionado es inválido."
            ]
        }
    }


## Chilpas get parent [/api/chilpa/infoParent]


### Obtener informacion de un tutor [POST]

Esta accion obtiene la informacion de un padre con todas las relaciones hasta sus hijos
+ Request (application/json)

    {
        "id": 4
    }


+ Response 200 (application/json)
    {
        "id": 4,
        "name": "Prof. Tremayne Bruen PhD",
        "alias": "Candido Cummerata",
        "email": "fbayer@gmail.com",
        "created_at": "2005-02-10 16:31:23",
        "updated_at": "1999-02-15 01:31:44",
        "effects": 1,
        "music": 1,
        "chilpas": [
            {
                "id": 27,
                "nombre": "Selmer Cartwright",
                "genero": "F",
                "edad": 4,
                "status": 1,
                "usoWeb": 1,
                "usoAndroid": 9,
                "usoIos": 2,
                "dificultad": null,
                "user_id": 4,
                "color_id": 2,
                "mascota_id": 2,
                "comida_id": 4,
                "avatar_id": 9,
                "fecha_ultima_sesion": 210527714,
                "deleted_at": null,
                "created_at": "2018-08-10 16:22:02",
                "updated_at": "2018-08-10 16:22:02",
                "updated": 1533918122,
                "color": {
                    "id": 2,
                    "nombre": "Verde",
                    "codigo": "39F95A",
                    "created_at": "2018-08-10 16:22:02",
                    "updated_at": "2018-08-10 16:22:02"
                },
                "mascota": {
                    "id": 2,
                    "nombre": "Perro",
                    "created_at": "2018-08-10 16:22:02",
                    "updated_at": "2018-08-10 16:22:02"
                },
                "comida": {
                    "id": 4,
                    "nombre": "Taco",
                    "created_at": "2018-08-10 16:22:02",
                    "updated_at": "2018-08-10 16:22:02"
                },
                "avatar": {
                    "id": 9,
                    "imagen": "avatar_girl_4",
                    "genero": "F",
                    "created_at": "2018-08-10 16:22:02",
                    "updated_at": "2018-08-10 16:22:02",
                    "colorBack": "#88C140",
                    "colorContrast": "#F05638"
                },
                "personaje_tutoreado": [
                    {
                        "id": 105,
                        "porcentaje": 0,
                        "favorito": 0,
                        "tutoreado_id": 27,
                        "personaje_id": 1,
                        "created_at": "2018-08-10 16:22:02",
                        "updated_at": "2018-08-10 16:22:02",
                        "personaje": {
                            "id": 1,
                            "nombre": "flin",
                            "emocion": "Frustración",
                            "created_at": "2018-08-10 16:22:02",
                            "updated_at": "2018-08-10 16:22:02",
                            "description": "Hola, yo soy Flin! Mi tarea es que tu chilpa se de cuanta poco a poco que por cada acción hay una respuesta!",
                            "color": "#FF422F"
                        }
                    }
                    
                ]
            }
            ...
        ]
    }
+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "id": [
                "El campo id es requerido."
            ]
        }
    }
+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "id": [
                "El campo id seleccionado es inválido."
            ]
        }
    }


## Chilpas create in tutor [/api/chilpa/createTutoreado]

### Crear a un chilpa el tutor [POST]

Esta accion el tutor crea un chilpa
+ Request (application/json)
    {
        "id" : 4,
        "status" : 1,
        "nombre" : "nombre",
        "genero" : "M",
        "edad"   : "23",
        "color_id" : 1,
        "mascota_id" : 2,
        "comida_id" : 2,
        "avatar_id" : 2,
        "flan_id" : 1
    }
 
+ Response 200 (application/json)   
    {
        "response": "success"
    }
+ Response 200 (application/json)   
    {
        "response": "error",
        "message": {
            "campo": [
                "El campo campo es requerido."
            ]
        }
    }
## Group Catalogos
Grupo de todos los catalogos.. Es **reconocido** por el **keyword `grupo`**  `Catalogos`.

## Obtener Catalogos [/api/catalogos]


### Obtener informacion de un chilpa [GET]

+ Response 200 (application/json)
   {
    "colors": [
        {
            "id": 1,
            "nombre": "Azul",
            "codigo": "309CF8",
            "created_at": "2018-08-10 16:22:02",
            "updated_at": "2018-08-10 16:22:02"
        }
        ...
    ],
    "avatars": [
        {
            "id": 1,
            "imagen": "avatar_boy_1",
            "genero": "M",
            "created_at": "2018-08-10 16:22:02",
            "updated_at": "2018-08-10 16:22:02",
            "colorBack": "#7239E2",
            "colorContrast": "#9D6559"
        }
        ...
    ],
    "foods": [
        {
            "id": 1,
            "nombre": "Manzana",
            "created_at": "2018-08-10 16:22:02",
            "updated_at": "2018-08-10 16:22:02"
        }
        ...
    ],
    "pets": [
        {
            "id": 1,
            "nombre": "Gato",
            "created_at": "2018-08-10 16:22:02",
            "updated_at": "2018-08-10 16:22:02"
        }
        ...
    ],
    "products": [
        {
            "id": 1,
            "redirect_to": "https://www.distroller.com/cuaderno-plush-neonato-azul/p",
            "description": "El Cuardernirri más Pachonsito y Suavesito directito de NeonatitlánPeluche.",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAABHNCSVQICAgIfAhkiAAAIABJREFUeJzsvXmsfFt21/dZa+99zqmqe+/v90a7bdNOWjS2MQaCcbCb0WYOlkMgjAkmDJEyECADSXD4I4mCggRJkBAEKUQofyT8QYAEpEhhiBGIRCIGO40nPHXTuP36vX6/4Q5Vdc7Ze6+VP/apuve97nbsjvv18M5HZvRYI...",
            "name": "Cuaderno Jelly Mundo"
        }
        ...
    ]
}


## Group Config
Grupo de todos las configuraciones.. Es **reconocido** por el **keyword `grupo`**  `Config`.
Configuraciones de sonido ambiental y efectos de juegos
## Actualizar Config [/api/config/sounds]

### Actualizar la informacion de configuracion [POST]
+ Request (application/json)
    {
        "effects" : false,
        "music" : true,
        "user" : 4
    }
+ Response 200 (application/json)

    {
        "response": "success",
        "message": ""
    }

+ Response 200 (application/json)
    {
        "response": "error",
        "message": "El usuario no se encuentra registrado"
    }

+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "effects": [
                "El campo effects es requerido."
            ],
            "music": [
                "El campo music es requerido."
            ],
            "user": [
                "El campo user es requerido."
            ]
        }
    }




## Group Tutor
Grupo de Tutor.. Es **reconocido** por el **keyword `grupo`**  `Tutor`.

## Actualzar Tutor [/api/update/tutor]

### Actualizar la informacion del tutor [POST]
+ Request (application/json)
    {
        "id" : 2,
        "name" : "Dante Rangel",
        "alias" : "Dante Rangel",
        "email" : "dante.rangelrobles@gmail.com",
        "password": "1234567",
        "password_confirmation": "1234567"
    }

+ Response 200 (application/json)
    {
        "response": "error",
        "message": {
            "email": [
                "El campo email ya ha sido tomado."
            ]
        }
    }




## Group Estadisticas
Grupo de Estadisticas.. Es **reconocido** por el **keyword `grupo`**  `Estadisticas`.

## Actualzar Estadisticas [/api/chilpa/updateScore]

### Actualizar el score de cada chilpa [POST]

__Si es juego(**game**) se sumara al porcentaje dependiendo de la edad del chilpa con los siguientes criterios__
* Menor a 1 año  = 5 puntos
* 2 a 3 años  = 4 puntos
* 4 a 5 años  = 3 puntos
* 6 a 9 años  = 2 puntos
* Mayores a 9 años  = 1 puntos

__Si es interaccion(**interaction**) se hara una evaliacion dependiendo de la edad y de los aciertos y no aciertos que tuvo el chilpa__

Ejemplo:
   - success : 3
   - errors : 2
   - idChilpa: 1
   
Cuando el chilpa tiene 3 años
   - (success - errors) / edad
   - (3 - 2) / 3  =  .33

Se aumentara un .33 puntos 


+ Request (application/json)
    {
        "type" : "game OR interaction",
        "flanGame" : "flen || flin || flon || flun",
        "idChilpa" : 2,
        "success" : 1,
        "errors" : 0
    }


+ Response 200 (application/json)
    {
        "response": "errors",
        "errors": [
            'No se encontro el chilpa',
            'No existe el juego de ese flan',
            'No existe ese tipo de dinamica'
        ]
    }

Se regresaran solo los errores que llegaran a existir