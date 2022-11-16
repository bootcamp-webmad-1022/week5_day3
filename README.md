## AXIOS

  - Axios es una librería que podemos emplear bien desde el cliente, usando su CDN. O desde un proyecto de npm, instalandolo previamente.
  - Nos permite hacer peticiones HTTP asíncronas sin recarga de página. 
  - Está gestionada mediante promesas.
  
#### Emitir peticiones GET/DELETE:

  ```js
      axios.get("URL")
        .then(response => console.log(response))
        .catch(err => console.log(err))
  ```

#### Emitir peticiones POST/PUT:

  ```js
      axios.post("URL", dataToSend)
        .then(response => console.log(response))
        .catch(err => console.log(err))
  ```

#### Instanciando una URL base:

  ```js
    const axiosApp = axios.create({ 
       baseURL: "https://domain.com" 
    })
    axiosApp.get("/final-endpoint")
  ```

## Servicios

Un [servicio web](https://es.wikipedia.org/wiki/Servicio_web) es una tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones. En un proyecto de desarrollo web es común encontrar los servicios encapsulados en una clase.
