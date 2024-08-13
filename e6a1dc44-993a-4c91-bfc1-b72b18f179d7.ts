export default {
  entity: {
    id: 'e6a1dc44-993a-4c91-bfc1-b72b18f179d7',
    name: '封克达在全区公安会议上的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '封克达',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives28/main/e6a1dc44-993a-4c91-bfc1-b72b18f179d7/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives28/main/e6a1dc44-993a-4c91-bfc1-b72b18f179d7/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives28/main/e6a1dc44-993a-4c91-bfc1-b72b18f179d7/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives28/main/e6a1dc44-993a-4c91-bfc1-b72b18f179d7/4.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '封克达在全区公安会议上的讲话',
        authors: [
          '封克达',
        ],
        page_start: 1,
        page_end: 4,
        dates: [
          {
            year: 1976,
            month: 7,
            day: 25,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: 'e6a1dc44-993a-4c91-bfc1-b72b18f179d7',
  resource_type: 'book',
  version: 2,
};