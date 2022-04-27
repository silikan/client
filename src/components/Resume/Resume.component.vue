<template>

 <div class="App container mt-5">

    <div id="divToPrint">
        <h2>therichpost.com</h2>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Jassa</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button class="btn btn-primary" @click="printDocument()">Export To PDF</button>
    </div>

</template>

<script>

//importing bootstrap 5 and pdf maker Modules
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
export default {




    methods: {
       printDocument() {


          //get table html
          const pdfTable = document.getElementById('divToPrint');
          //html to pdf format
          var html = htmlToPdfmake(pdfTable.innerHTML);

          const documentDefinition = { content: html };
          pdfMake.vfs = pdfFonts.pdfMake.vfs;
          pdfMake.createPdf(documentDefinition).open();

    }
}
}
</script>
