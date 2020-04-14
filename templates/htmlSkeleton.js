function htmlSkeleton(req, res) {
  return /*html*/`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Survive the virus</title>
        <link rel='shortcut icon' href='https://ps.w.org/covid-19/assets/icon.svg?rev=2262770' type='image/x-icon'> 
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
        <!-- <link rel="stylesheet" href="/style.css"> -->
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap" rel="stylesheet">
      </head>
      <body>
        <h1 class="heading-logo">SRV|VRS</h1>
        ${req.nav}
        <main>
            ${req.page}
        </main>
      </body>
    </html>`
}

module.exports = htmlSkeleton;