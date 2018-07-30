import test from 'ava';
import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
configure({ adapter: new Adapter() });

let responseData = [
  {
    "id": 1,
    "adomain":["advertiser.com" ], "bundle":[	"12345" ], "cat":["IAB8" ],
    "dadid":"abc123451234123412341234",  "lang":"EN", "sadid":"abc12345", "secure":1,
    "audit":{
      "feedback":[],
      "lastmod":"2018-05-18T01:11:24.242974-04:00",
      "status": 2,
      "corr":null
    },
    "creative":{
      "attr":[1,2],
      "iurl":"http://s3.aws.amazon.com/bucket/ad-123.jpg",
      "display":{
      "adm":"<img src='http://adserver.com/ad.jpg'/>",
      "api":1,
      "curl":"http://adserver.com/ad.js?adid=123",
      "h":250,
      "hratio":null,
      "mimes":["application/javascript"],
      "preferred_scale":"2.6",
      "w":300,
      "wratio":null,
      "subtype":11,
      "snapshot":[
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png",
          "scale":"2.6"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png",
          "scale":"2.7"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.0.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm10:30am-11:30am (8:00pm-9:00pm IST)-snapshot-300-250-1.0.png",
          "scale":"1.0"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png",
          "scale":"1.3"
        }
      ]
      }
    },
    "events":[]
  },
  {
    "id": 2,
    "adomain":["advertiser2.com" ], "bundle":[	"12345" ], "cat":["IAB8" ],
    "dadid":"abc1234567",  "lang":"EN", "sadid":"abc12345", "secure":1,
    "audit":{
      "feedback":[],
      "lastmod":"2018-05-18T01:11:24.242974-04:00",
      "status":1,
      "corr":null
    },
    "creative":{
      "attr":[1,2],
      "iurl":"http://s3.aws.amazon.com/bucket/ad-123.jpg",
      "display":{
      "adm":"<img src='http://adserver.com/ad.jpg'/>",
      "api":1,
      "curl":"http://adserver.com/ad.js?adid=123",
      "h":250,
      "hratio":null,
      "mimes":["application/javascript"],
      "preferred_scale":"2.7",
      "w":300,
      "wratio":null,
      "subtype":11,
      "snapshot":[
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png",
          "scale":"2.6"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png",
          "scale":"2.7"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.0.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm10:30am-11:30am (8:00pm-9:00pm IST)-snapshot-300-250-1.0.png",
          "scale":"1.0"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png",
          "scale":"1.3"
        }
      ]
      }
    },
    "events":[]
  },
  {
    "id": 3,
    "adomain":["advertiser3.com" ], "bundle":[	"12345" ], "cat":["IAB8" ],
    "dadid":"abc12345890",  "lang":"EN", "sadid":"abc12345", "secure":1,
    "audit":{
      "feedback":[],
      "lastmod":"2018-05-18T01:11:24.242974-04:00",
      "status":2,
      "corr":null
    },
    "creative":{
      "attr":[1,2],
      "iurl":"http://s3.aws.amazon.com/bucket/ad-123.jpg",
      "display":{
        "adm":"<img src='http://adserver.com/ad.jpg'/>",
        "api":1,
        "curl":"http://adserver.com/ad.js?adid=123",
        "h":250,
        "hratio":null,
        "mimes":["application/javascript"],
        "preferred_scale":"1.0",
        "w":300,
        "wratio":null,
        "subtype":11,
        "snapshot":[
          {
            "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png\" />",
            "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png",
            "scale":"2.6"
          },
          {
            "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png\" />",
            "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png",
            "scale":"2.7"
          },
          {
            "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.0.png\" />",
            "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm10:30am-11:30am (8:00pm-9:00pm IST)-snapshot-300-250-1.0.png",
            "scale":"1.0"
          },
          {
            "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png\" />",
            "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png",
            "scale":"1.3"
          }
        ]
      },
    },
    "events":[]
  },
  {
    "id": 4,
    "adomain":["advertiser4.com" ], "bundle":[	"12345" ], "cat":["IAB8" ],
    "dadid":"abc12345",  "lang":"EN", "sadid":"abc12345", "secure":1,
    "audit":{
      "feedback":[],
      "lastmod":"2018-05-18T01:11:24.242974-04:00",
      "status":3,
      "corr":null
    },
    "creative":{
      "attr":[1,2],
      "iurl":"http://s3.aws.amazon.com/bucket/ad-123.jpg",
      "display":{
      "adm":"<img src='http://adserver.com/ad.jpg'/>",
      "api":1,
      "curl":"http://adserver.com/ad.js?adid=123",
      "h":250,
      "hratio":null,
      "mimes":["application/javascript"],
      "preferred_scale":"1.3",
      "w":300,
      "wratio":null,
      "subtype":11,
      "snapshot":[
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.6.png",
          "scale":"2.6"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-2.7.png",
          "scale":"2.7"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.0.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm10:30am-11:30am (8:00pm-9:00pm IST)-snapshot-300-250-1.0.png",
          "scale":"1.0"
        },
        {
          "image_markup":"<img src=\"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png\" />",
          "image_url":"https://s3.amazonaws.com/programmatic-admin-dev/media/snapshot/1234567/abc12345/adm-snapshot-300-250-1.3.png",
          "scale":"1.3"
        }
      ]
      }
    },
    "events":[]
  }
];
let loading = true;

test('Render App component', t => {
  const component = shallow(<App/>);
  t.is(component).toHaveLength(1);
});

test('has a .App class name', t => {
	const wrapper = shallow(<App/>);
	t.true(wrapper.hasClass('App'));
});

test('renders two `.App-header`', t => {
	const wrapper = shallow(<App/>);
	t.is(wrapper.find('.App-header').length, 1);
  const Apps = TestUtils.renderIntoDocument(
      <App />
  );
  console.log(Apps);

});
// test('outputs given text', t => {
//   const wrapper = shallow(
//     <App
//       id={1}
//       text="buy milk"
//       completed={false}
//       onToggle={() => {}}
//     />
//   );
//   t.regex(wrapper.render().text(), /buy milk/);
// });
//
// test('has a strikethrough if completed', t => {
//   const wrapper = shallow(
//     <App
//       id={1}
//       text="buy milk"
//       completed
//       onToggle={() => {}}
//     />
//   );
//   t.is(wrapper.prop('style').textDecoration, 'line-through');
// });
//
//
// test('executed callback when clicked with its id', t => {
//   const onToggle = sinon.spy();
//   const wrapper = shallow(
//     <App
//       id={1}
//       text="buy milk"
//       completed={false}
//       onToggle={onToggle}
//     />
//   );
//   wrapper.simulate('click');
//   t.true(onToggle.calledWith(1));
// });
