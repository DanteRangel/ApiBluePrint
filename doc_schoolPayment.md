FORMAT: 1A
HOST: http://school-payment.red-wolf.com.mx/api/v1
#  API School Payment
[Markdown](http://daringfireball.net/projects/markdown/syntax) **formatted** description.

API de consulta para la plataforma de School Payment


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
        "data": {
            "id": 1,
            "name": "Ejemplo",
            "email": "correo@ejemplo.com",
            "email_verified_at": null,
            "created_at": "2018-11-22 17:57:52",
            "updated_at": "2018-11-22 17:57:52",
            "api_token": "GRAFkSALfMTdJk9tMJVW16NfZTVIPvvzBvOPMrEX3tkbFZ3dXrdlxmIgfzUR"
        }
    }
+ Response 401 (application/json)
    {
        "errors": {
            "credentials": [
                "These credentials do not match our records."
            ]
        }
    }
+ Response 422 (application/json)
{
    "error": {
        "email": [
            "The email field is required.",
             "The email must be a valid email address."
        ],
        "password": [
            "The password field is required."
        ]
    }
}
## Registro de Usuarios [/register]

### Registro de usuarios [POST]

+ Request (application/json)

    {
        "name": "Ejemplo",
        "email": "correo@ejemplo.com",
        "password": "1234567",
        "password_confirmation": "1234567"
    }

+ Response 201 (application/json)
    {
        "data": {
            "name": "Ejemplo",
            "email": "correo@ejemplo.com",
            "updated_at": "2018-11-22 17:57:52",
            "created_at": "2018-11-22 17:57:52",
            "id": 1,
            "api_token": "GRAFkSALfMTdJk9tMJVW16NfZTVIPvvzBvOPMrEX3tkbFZ3dXrdlxmIgfzUR"
        }
    }

+ Response 422 (application/json)
    {
        "errors": {
            "email": ["The email has already been taken."],
            "password": ["The password confirmation does not match."],
            "field" :
                [
                    "error 1",
                    "error 2"
                ]
        }
    }


## Restaurar contraseña de Usuarios [/reset/password/{?email}]

### Restuaruar contraseña [GET]

+ Parameters
    + email (string, `correo@ejemplo.com`) 

+ Response 200 (application/json)
    {
        "message": "We have sent you an email"
    }

+ Response 422 (application/json)
   {
        "errors": {
            "email": [
                "The selected email is invalid."
            ]
        }
    }
    