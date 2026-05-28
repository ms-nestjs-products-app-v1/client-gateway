CLIENT GATEWAY (Manejo de errores y validación)

* Inicializar el client-gateway
    - Crear la app
        $ nest new client-gateway
            > ? Which package manager would you ❤️  to use? npm
        $ cd client-gateway
        $ npm run start         // Run development
        $ npm run start:dev     // Run watch mode

        RUN Services:
            + Client Gateway
                $ npm run start:dev
            + Product MS
                $ npm run start:dev

    
    - Instalar dependencias
        + DotENV (Variables de entorno)
            $ npm i dotenv
        + Joi (Vaidador de Schema)
            $ npm i joi
        + Crear Microservices
            $ npm i --save @nestjs/microservices
        + Validation (Validacion de la data)
            $ npm i --save class-validator class-transformer


    - Nest CLI
        + Crear un nuevo resource (Sin archivos de test)
            $ nest g res products --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) n

    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
        + Create a new collection (Click "+" | "Blank collection")
            > Name: "ms-nestjs-client-gateway"

        + HTTP requests
            * Product (Click "..." > Add folder > Name: "Product")
                - Create Product
                    > POST: http://localhost:3000/api/products                                          Click "Send"
                        > Body | raw (JSON)
                            { }
                - Get All Products
                    > GET: http://localhost:3000/api/products                                           Click "Send"
                    > GET: http://localhost:3000/api/products?page=1&limit=10                           Click "Send"
                - Get Single Product
                    > GET: http://localhost:3000/api/products/{{PRODUCT_ID}}                            Click "Send"
                - Update Product
                    > PATCH: http://localhost:3000/api/products/{{PRODUCT_ID}}                          Click "Send"
                        > Body | raw (JSON)
                            { }
                - Delete Product
                    > DELETE: http://localhost:3000/api/products/{{PRODUCT_ID}}                         Click "Send"
