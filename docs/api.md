# API V1 Docs

## API URL http://159.89.96.181/api/v1/

## Endpoints
* [`POST /api/v1/tokens`](#get-application-token) - Create token for the application
* [`GET /api/v1/notes`](#get-notes) - Get all notes.
* [`GET /api/v1/notes/:noteId`](#get-note-by-id) - Get note by id.
* [`POST /api/v1/notes`](#create-note) - Create note.
* [`PATCH /api/v1/notes`](#update-note) - Partial update note.
* [`DELETE /api/v1/notes`](#delete-note) - Delete note.

----

## Get API Token
* API Token Should be generated once, this is not a user token.
* **Method** : `POST`
* **URL** : `/api/v1/tokens`
* **Data Params**  
    ```json
      {
        "userName": { "type": "string", "required": true }
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
* **Header Params**  
    ```json
      {
        "Authorization": "Bearer {application_token}"
      }
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

## Get Note by id
* **Method** : `GET`
* **URL** : `/api/v1/notes/:noteId`
* **Header Params**  
    ```json
      {
        "Authorization": "Bearer {application_token}"
      }
    ```
* **URL Params**  
  ```json
      "noteId": { "type": "integer", "required": true }
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

## Create Note
* **Method** : `POST`
* **URL** : `/api/v1/notes`
* **Header Params**  
    ```json
      {
        "Authorization": "Bearer {application_token}"
      }
    ```
* **Data Params**  
    ```json
      {
        "title": { "type": "string", "required": true },
        "content": { "type": "string", "required": false }
      }
    ```
* **Success Response**
  * **Code:** 201
  * **Content:**  
    ```json 
      {
        "id": 20,
        "title": "Note Title",
        "content": "Note Content"
      }
    ```
* **Error Response**
  * **Code:** 401 UNAUTHORIZED
  * **Code:** 400 BAD REQUEST
  * **Code:** 404 NOT FOUND

----

## Update Note
* **Method** : `PATCH`
* **URL** : `/api/v1/notes/:noteId`
* **Header Params**  
    ```json
      {
        "Authorization": "Bearer {application_token}"
      }
    ```
* **URL Params**  
  ```json
      "noteId": { "type": "integer", "required": true }
    ```
* **Data Params**  
    ```json
      {
        "title": { "type": "string", "required": false },
        "content": { "type": "string", "required": false }
      }
    ```
* **Success Response**
  * **Code:** 200
  * **Content:**  
    ```json 
      {
        "id": 20,
        "title": "Note Title",
        "content": "Note Content"
      }
    ```
* **Error Response**
  * **Code:** 401 UNAUTHORIZED
  * **Code:** 400 BAD REQUEST
  * **Code:** 404 NOT FOUND

----

## Delete Note
* **Method** : `DELETE`
* **URL** : `/api/v1/notes/:noteId`
* **Header Params**  
    ```json
      {
        "Authorization": "Bearer {application_token}"
      }
    ```
* **URL Params**  
  ```json
      "noteId": { "type": "integer", "required": true }
    ```
* **Success Response**
  * **Code:** 201 NO CONTENT
* **Error Response**
  * **Code:** 401 UNAUTHORIZED
  * **Code:** 400 BAD REQUEST
  * **Code:** 404 NOT FOUND

----
