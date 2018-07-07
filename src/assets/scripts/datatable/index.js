import * as $ from 'jquery';
import 'datatables';

const API_ENDPOINT = 'https://1cadhsexxd.execute-api.ap-northeast-1.amazonaws.com/Dev';

export default (function () {

  $('#dataTable').DataTable({
    'ajax': {
      'processing': true,
      'url': API_ENDPOINT + '?carId=*',
      'dataSrc':'',
    },
    'columns': [
      { 'data': 'id' },
      { 'data': 'nama_pemilik' },
      { 'data': 'plate_no' },
      { 'data': 'merk' },
      { 'data': 'model' },
      { 'data': 'warna' },
      { 'data': 'nilai_jual' },
      { 'data': 'status_pajak' },
      { 'data': 'location.lat' },
      { 'data': 'location.lon' },
      { 
        'data': 'url',
        'render': function (data, type, row, meta) {
          if (type === 'display') {
              data = '<a href="' + data + '">' + 'link' + '</a>';
          }
          return data;
        },
      },
      { 'data': 'timestamp' },
    ],
  });
}());

