$(function(){
    $("#ubaPlayer").ubaPlayer({
    codecs: [{name:"MP3", codec: 'audio/mpeg;'}]
    });
});

function createUploader() {
var uploader = new qq.FileUploader({
  element: document.getElementById('bootstrapped-fine-uploader'),
  action: '/upload',
  allowedExtensions: ['mp3', 'aif', 'ogg'],
  uploadButtonText: '<i class="icon-upload icon-white"></i> Upload a file',
  template: '<div class="qq-uploader row">' +
              '<pre class="qq-upload-drop-area"><span>{dragText}</span></pre>' +
              '<div class="qq-upload-button btn btn-success" style="width: auto;">{uploadButtonText}</div>' +
              '<ul class="qq-upload-list" style="margin-top: 10px; text-align: center;"></ul>' +
            '</div>',
  classes: {
    button: 'qq-upload-button',
    drop: 'qq-upload-drop-area',
    dropActive: 'qq-upload-drop-area-active',
    dropDisabled: 'qq-upload-drop-area-disabled',
    list: 'qq-upload-list',
    progressBar: 'qq-progress-bar',
    file: 'qq-upload-file',
    spinner: 'qq-upload-spinner',
    finished: 'qq-upload-finished',
    size: 'qq-upload-size',
    cancel: 'qq-upload-cancel',
    failText: 'qq-upload-failed-text',
    success: 'alert alert-success',
    fail: 'alert alert-error',
    successIcon: null,
    failIcon: null
  }
});
}

window.onload = createUploader;