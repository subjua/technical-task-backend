# API V1 Docs

## Endpoints
* [`POST /api/v1/tokens`](#register-application) - Create token for the application
* [`GET /api/v1/notes`](#get-notes) - Get all notes.
* `GET /api/v1/notes/:noteId` - Get note by id.
* `POST /api/v1/notes` - Create note.
* `PATCH /api/v1/notes` - Partial update note.
* `DELETE /api/v1/notes` - Delete note.

----

## Register Application
* **Method** : `POST`
* **URL** : `/api/v1/tokens`
* **Data Params**  
    ```json
      {
        "userName": { type: string, required: true }
      }
    ```
* **Success Response**
  * **Code:** 201
  * **Content:**  
    ```json 
      {
        "id": 37,
        "userName": "Alex Bobr",
        "token": "u9pavu53s5fhomymjeqphkvwyyyywttutyoq"
      }
    ```
* **Error Response**
  * **Code:** 401 UNAUTHORIZED
  * **Code:** 400 BAD REQUEST
----
## Get Notes
* **Method** : `GET`
* **URL** : `/api/v1/notes`
* **Success Response**
  * **Code:** 200
  * **Content:**  
    ```json 
      {
        "notes": [
          {
            "id": 20,
            "title": "Note Title",
            "content": "Note Content"
          }
        ]
      }
    ```
* **Error Response**
  * **Code:** 401 UNAUTHORIZED
  * **Code:** 400 BAD REQUEST
----
## Get Note by id
* **Method** : `GET`
* **URL** : `/api/v1/notes/:noteId`
* **URL Params**  
  ```json
      "noteId": { type: integer, required: true }
    ```
* **Success Response**
  * **Code:** 200
  * **Content:**  
    ```json 
      {
        "notes": [
          {
            "id": 20,
            "title": "Note Title",
            "content": "Note Content"
          }
        ]
      }
    ```
* **Error Response**
  * **Code:** 401 UNAUTHORIZED
  * **Code:** 400 BAD REQUEST
----