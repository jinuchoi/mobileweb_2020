var contactList;  // 전역 변수(연락처 목록 객체)
  
  // 특정 연락처 검색
  function searchContact() {
      //페이지로부터 검색 대상 이름을 지정
      var searchStr = $('#searchKey').val();   
      //검색 대상 및 반환 연락처 항목 리스트를 지정
      var contactFields = ['displayName', 'name', 'phoneNumbers', 'emails', 'addresses' ];
      //검색 옵션 객체를 지정
      var contactFindOptions = { filter : searchStr, multiple : true };
      //연락처 탐색
      navigator.contacts.find(contactFields, onContactSearchSuccess, onContactSearchError, contactFindOptions);
  }
  
  // 전체 연락처 검색
  function searchContactsAll() {
      var contactFields = ['displayName', 'name', 'phoneNumbers', 'emails', 'addresses' ];
      var contactFindOptions = { filter : '', multiple : true };
      navigator.contacts.find(contactFields, onContactSearchSuccess, onContactSearchError, contactFindOptions);
  }

  // 검색 성공 콜백 함수
  function onContactSearchSuccess(contacts) {
    var i, len, tagList = '';
    contactList = contacts;          //전역 객체 변수
    len = contacts.length;
    if(len > 0) {
      tagList = '<ul data-role="listview" id="clistview" data-inset="true" data-autodividers="true">';
      for( i = 0, len; i < len; i += 1) {
          tagList += '<li><a onclick="displayContact(' + i + ');">' + contacts[i].displayName + '</a></li>';
      }
      tagList += '</ul>';
      $('#contactListArea').children().last().replaceWith(tagList);
      $(document).bind('pagechange', function() {
          $('.ui-page-active :jqmData(role=content)').trigger('create');
      });
      $.mobile.changePage('#contactListShowPage', 'slide', false, true);    
    } else {
      navigator.notification.alert('검색 결과 없음', null, '연락처 검색 성공');
    }
  }

  //검색 실패 콜백 함수
  function onContactSearchError(e) {
      navigator.notification.alert(e.code, null, '연락처 검색 오류');
  }


