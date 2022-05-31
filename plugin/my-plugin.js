module.exports = class {
  constructor(options) {
    // 在new的时候可以传入一个配置对象
    this.options = Object.prototype.toString.call(options) === '[object Object]' ? options : {}
  }

  apply(compiler) {
    // compiler.hooks.entryOption.tap(
    //   'MyPlugin',
    //   (context, entry) => {
    //     console.log(context, entry)
    //   }
    // )
    compiler.hooks.emit.tapAsync(
      'MyPlugin',
      (compilation, callback) => { 
        const source = compilation.assets['main.js'].source()
        compilation.assets['index.html'] = {
          source: function () { 
            return `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              <script>
                ${source}
              </script>
            </head>
            
            <body>
            
            </body>
            
            </html>
            
            `
          }

          
        }
        callback()
      }
    )
  }
}
