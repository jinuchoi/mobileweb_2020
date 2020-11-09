// 연락처 상세 정보 표시
function displayContact(index) {
  var len, i, no='', name='', phone='', email='', address='';

  // 선택된 연락처 항목을 설정
  var myContact = contactList[index];
  //번호            
  no = '<p>번호 : [' + index + ']</p>'
  // 표시 이름            
  if(myContact.displayName == null) {
      name += myContact.name.familyName + myContact.name.givenName;
    } else {
      name += myContact.displayName;
  }
  name = '<p>이름 : ' + name + '</p>'
  // 전화번호  
  if(myContact.phoneNumbers != null) {
    len = myContact.phoneNumbers.length;
    if(len > 0) {
      for( i = 0, len; i < len; i += 1) {
        phone += '<p>전화(' + myContact.phoneNumbers[i].type + ') : ' + myContact.phoneNumbers[i].value + '</p>';
      }
    }
  } else {
    phone += '<p>전화 : 정보없음</p>';
  }  
  // 이메일
  if(myContact.emails != null) {
    len = myContact.emails.length;
    if(len > 0) {
      for( i = 0, len; i < len; i += 1) {
        email += '<p>이메일(' + myContact.emails[i].type + ') : '  + myContact.emails[i].value + '</p>' ;
      }
    }
  } else {
    email += '<p>이메일 : 정보없음</p>';
  }  
  // 주소
  if(myContact.addresses != null) {
    len = myContact.addresses.length;
    if(len > 0) {
      for( i = 0, len; i < len; i += 1) {
        address += '<p>장소(' + myContact.addresses[i].type + ') : '  + myContact.addresses[i].formatted + '</p>' ;
      }
    }
  } else {
    address += '<p>장소  : 정보없음</p>';
  }                 
  
  $('#contactInfoArea').html(no + name + phone + email + address); 
  $.mobile.changePage('#contactInfoShowPage', 'slide', false, true);
}
