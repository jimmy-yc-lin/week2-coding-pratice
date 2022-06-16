const http = require('http')
const qs = require('querystring')
const calculator = require('./calculator')

const server = http.createServer(function (request, response) {
    console.dir(request.param)

    /*
    Please implement the rest of functions
        - subtract
        - multiply
        - divide
        - maximum
        - minimum
    */
    if (request.method == 'POST') {
        console.log('POST')
        var body = ''
        request.on('data', function (data) {
            body += data
        })

        request.on('end', function () {
            const post = qs.parse(body)
            let result = '';

            switch(post.type){
                case 'Add':
                    result = calculator.add(post.numbers)
                    break;
                case 'Subtract':
                    result = calculator.subtract(post.minuend, post.subtrahend)
                    break;
                case 'Multiply':
                    result = calculator.multiply(post.multiplier, post.multiplicand)
                    break;
                case 'Divide':
                    result = calculator.divide(post.dividend, post.divisor)
                    break;
                case 'Maximum':
                    result = calculator.maximum(post.maxList)
                    break;
                case 'Minimum':
                    result = calculator.minimum(post.minList)
                    break;
                default:
                    result = 'something went wrong'
                    break;
            }

            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end('Result: ' + result)
        })
    } else {
        var html = `
           <html>
               <body>
                   <form method="post" action="http://localhost:3000">
                        <div style="margin:10px 0">
                            <label for="numbers">Add</label>
                            <input type="text" name="numbers" />
                            <input type="submit" name="type" value="Add" />
                        </div>

                        <div style="margin:10px 0">
                            <label>Subtract</label>
                            <input type="text" name="minuend" /> 
                            <span> - </span>
                            <input type="text" name="subtrahend" />
                            <input type="submit" name="type" value="Subtract" />
                        </div>

                        <div style="margin:10px 0">
                            <label>Multiply</label>
                            <input type="text" name="multiplier" /> 
                            <span> * </span>
                            <input type="text" name="multiplicand" />
                            <input type="submit" name="type" value="Multiply" />
                        </div>

                        <div style="margin:10px 0">
                            <label>Divide</label>
                            <input type="text" name="dividend" /> 
                            <span> / </span>
                            <input type="text" name="divisor" />
                            <input type="submit" name="type" value="Divide" />
                        </div>

                         <div style="margin:10px 0">
                            <label for="maxList">Find Maximum</label>
                            <input type="text" name="maxList" />
                            <input type="submit" name="type" value="Maximum" />
                        </div>

                        <div style="margin:10px 0">
                           <label for="minList">Find Minimum</label>
                           <input type="text" name="minList" />
                           <input type="submit" name="type" value="Minimum" />
                       </div>
                   </form>
               </body>
           </html>`
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)