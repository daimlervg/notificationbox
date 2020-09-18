function tld_load() {

  

    document.getElementById("tld-notifications-box-body-container").style.display = "block";
    document.getElementById("tld-notification-box-body").style.height = "400px";
    document.getElementById("tld-notification-box-body-filter").style.display = "none";
    document.getElementById("tld-notification-box-header-logout").style.display = "block";
    

    if (typeof(Storage) !== "undefined") {
      // localStorage & sessionStorage support!

      var obj = JSON.parse(sessionStorage.tld_notification);
 
      for (i=0; i<obj.notifications.length; i++)
        {
          generate_notificacion_html(obj.notifications[i])
        } 
    }
    else {
        alert("Sorry! No web storage support");
    }
  }

  function tld_set_session_storage(){ 

    generate_html();

    //var today = new Date();
    var today = new Date(2020, 9, 9, 8, 20, 15, 0);

    var notificacion = { 'notifications' :[{
        'title':'Notification 1', 
        'CallbackUrl': 'https://www.teledolar.com/',
        'Text': 'La transferencia se realizó por un monto de 1349.00 CRC',
        'AddedDate': format_date('2020-09-09T14:42:19.815458'),
        'flag': false
    },
    {
        'title':'Notification 2', 
        'CallbackUrl': 'https://www.teledolar.com/',
        'Text': 'La transferencia se realizó por un monto de 566.00 CRC',
        'AddedDate': today.toLocaleString(),
        'flag': false
    }
     ]
    };
    sessionStorage.setItem('tld_notification', JSON.stringify(notificacion));
    
   
   
    
  /*
    for (i=0; i<notificacion.notificacions.length; i++)
      {
        console.log("Vez: " + i);
        console.log(notificacion.notificacions[i].title);
      }  
     console.log(notificacion.notificacions[0].title);
    console.log(obj);
    var obj = JSON.stringify(sessionStorage.tld_notification);
    alert(obj);*/
  }

  function format_date(server_date){

   // var local_date = new Date(2020, 8, 9, 15, 50, 15, 0);
    var local_date = new Date();
    var converted_date = new Date(server_date);
    var hours = Math.abs(local_date.getTime() - converted_date.getTime()) / 3600000;

    if(hours < 1)
      result = 
        "Hace " + (Math.round(hours * 100) / 100 ) * 100 + " minutos";
    else
    {
      result =
        ("00" + (converted_date.getMonth() + 1)).slice(-2) + "/" +
        ("00" + converted_date.getDate()).slice(-2) + "/" +
        converted_date.getFullYear() + " " +
        ("00" + converted_date.getHours()).slice(-2) + ":" +
        ("00" + converted_date.getMinutes()).slice(-2) + ":" +
        ("00" + converted_date.getSeconds()).slice(-2);
    }
    
   return result
  }

  function generate_html()
  {
    var body = document.getElementsByTagName("BODY")[0];

    //Header -> tld-notification-box-header

    var tld_notification_box = document.createElement("div");
    tld_notification_box.setAttribute("id", "tld-notification-box-body-content-message");
    tld_notification_box.setAttribute("onload", "tld_set_session_storage()");

    var tld_notification_box_header = document.createElement("div");
    tld_notification_box_header.setAttribute("id", "tld-notification-box-header");

    var tld_notification_box_header_info = document.createElement("div");
    tld_notification_box_header_info.classList.add("tld-notification-box-header-info");

    var tld_notification_box_header_title = document.createElement("span");
    tld_notification_box_header_title.classList.add("tld-notification-box-header-title");
    tld_notification_box_header_title.appendChild(document.createTextNode("Hola1 👋"));

    var tld_notification_box_header_logout = document.createElement("a");
    tld_notification_box_header_logout.setAttribute("id", "tld-notification-box-header-logout");

    var span_logout = document.createElement("span");
    span_logout.appendChild(document.createTextNode("88774455"));

    var svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
    svg.setAttributeNS(null, "width", "25"); 
    svg.setAttributeNS(null, "height", "25"); 
    svg.setAttributeNS(null, "viewBox", "0 0 511 512");    

    var path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
    path.setAttributeNS(null, "d", "m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0");

    var span_text = document.createElement("span");
    span_text.appendChild(document.createTextNode("Hacemos que la comunicación entre negocios y personas sea sencilla y fluida."));
  
    tld_notification_box.appendChild(tld_notification_box_header);
    tld_notification_box_header.appendChild(tld_notification_box_header_info);
    tld_notification_box_header_info.appendChild(tld_notification_box_header_title);
    tld_notification_box_header_logout.appendChild(span_logout);
    svg.appendChild(path);
    tld_notification_box_header_logout.appendChild(svg);
    tld_notification_box_header_info.appendChild(tld_notification_box_header_logout);
    body.appendChild(tld_notification_box);
  
     //Body -> tld-notification-box-body

     var tld_notification_box_body = document.createElement("div");

     tld_notification_box_body.setAttribute("id", "tld-notification-box-body");

     var tld_notification_box_body_filter = document.createElement("div");
     tld_notification_box_body_filter.setAttribute("id", "tld-notification-box-body-filter");
     tld_notification_box_body_filter.classList.add("tld-notification-box-body-content");

     var tld_notification_box_body_content_title = document.createElement("div");
     tld_notification_box_body_content_title.classList.add("tld-notification-box-body-content-title");
     tld_notification_box_body_content_title.appendChild(document.createTextNode(" Recibir notificaciones del número:"));

     var tld_notification_box_body_content_ddl = document.createElement("select");
     tld_notification_box_body_content_ddl.classList.add("tld-notification-box-body-content-title");
     var tld_notification_box_body_content_ddl_option = document.createElement("option");
     tld_notification_box_body_content_ddl_option.appendChild(document.createTextNode("88774455"));
     tld_notification_box_body_content_ddl_option.appendChild(document.createTextNode("88997744"));
     
     var tld_notification_box_start_process = document.createElement("button");
     tld_notification_box_start_process.setAttribute("onclick", "tld_load()");

      var svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
    
      var path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
      path.setAttributeNS(null, "d", "M1.5 13.864L7.864 7.5 1.5 1.136");
      path.setAttribute(null, "stroke-width","2.5")
      path.setAttribute(null, "fill-rule","evenodd")

      var tld_notifications_box_body_container = document.createElement("div");
      tld_notifications_box_body_container.setAttribute("id", "tld-notifications-box-body-container");
      var tld_notification_box_body_content = document.createElement("div");
      tld_notification_box_body_content.classList.add("tld-notification-box-body-content-title");
      var tld_notifications_box_body_content_messages = document.createElement("div");
      tld_notifications_box_body_content_messages.setAttribute("id", "tld-notifications-box-body-content-messages");
      
      tld_notification_box_body_filter.appendChild(tld_notification_box_body_content_title);
      tld_notification_box_body_content_ddl.appendChild(tld_notification_box_body_content_ddl_option);
      tld_notification_box_body_filter.appendChild(tld_notification_box_body_content_ddl);
      
      svg.appendChild(path);
      tld_notification_box_start_process.appendChild(svg);
      tld_notification_box_body_filter.appendChild(tld_notification_box_start_process);
      

      tld_notification_box_body.appendChild(tld_notification_box_body_filter);

      //Footer
      var tld_notification_box_footer = document.createElement("div");
      tld_notification_box_footer.setAttribute("id", "tld-notification-box-footer");
      var tld_notification_box_footer_link = document.createElement("a");
      tld_notification_box_footer_link.setAttribute("href", "https://www.teledolar.com");
      tld_notification_box_footer_link.setAttribute("target", "_blank");
      var tld_notification_box_footer_span_orange = document.createElement("span");
      tld_notification_box_footer_span_orange.classList.add("tld-orange");
      var tld_notification_box_footer_span_green = document.createElement("span");
      tld_notification_box_footer_span_green.classList.add("tld-green");

      svg.appendChild(path);

      //Open Icon
      var tld_notification_box_launcher_icon_open = document.createElement("div");
      tld_notification_box_launcher_icon_open.setAttribute("id", "tld-notification-box-launcher-icon-open");
      tld_notification_box_launcher_icon_open.classList.add("tld-notification-box-launcher tld-launcher");
      var tld_notification_box_launcher_icon = document.createElement("div");
      tld_notification_box_launcher_icon.classList.add("tld-notification-box-launcher-icon");

      var svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
      svg.setAttributeNS(null, "viewBox", "0 0 28 32");    
  
      var path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
      path.setAttributeNS(null, "d", "M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z");
  
      svg.appendChild(path);
      tld_notification_box_launcher_icon.appendChild(svg);
      tld_notification_box_launcher_icon_open.appendChild(tld_notification_box_launcher_icon);
      body.appendChild(tld_notification_box_launcher_icon_open);

      //Minimize Icon


      var tld_notification_box_launcher_icon_minimize = document.createElement("div");
      tld_notification_box_launcher_icon_minimize.setAttribute("id", "tld-notification-box-launcher-icon-minimize");
      tld_notification_box_launcher_icon_minimize.classList.add("tld-notification-box-launcher tld-launcher");
      tld_notification_box_launcher_icon_minimize.setAttribute("onclick","tld_toggle_box()");

      var tld_notification_box_launcher_icon = document.createElement("div");
      tld_notification_box_launcher_icon.classList.add("tld-notification-box-launcher-icon");

      var svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
      svg.setAttributeNS(null, "viewBox", "0 0 16 14");    
  
      var path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
      path.setAttributeNS(null, "d", "M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z");
      path.setAttributeNS(null,"clip-rule","evenodd");
      path.setAttributeNS(null,"fill-rule","evenodd");

      svg.appendChild(path);
      tld_notification_box_launcher_icon.appendChild(svg);
      tld_notification_box_launcher_icon_minimize.appendChild(tld_notification_box_launcher_icon);
      body.appendChild(tld_notification_box_launcher_icon_minimize);

  }

  function generate_notificacion_html(obj){

    /*
    <div class="tld-notification-box-body-content-message" >
        <a href="#">La transferencia se realizó por un monto de 60000.00 CRC </a> 
    </div>
    <div class="tld-notification-box-body-content-message-time">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <path fill-rule="evenodd" d="M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979z" clip-rule="evenodd"></path>
        </svg>
        <span>Hace 1 min</span>
    </div>  
    */
   //
  
   var element = document.getElementById("tld-notifications-box-body-content-messages");
   var content_message_time = document.createElement("div");
   var content_message = document.createElement("div");
   var message = document.createElement("a");
   var content_date_time = document.createElement("div");
   var svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
   var path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
   var time = document.createElement("span");

   content_message.classList.add("tld-notification-box-body-content-message");
   content_date_time.classList.add("tld-notification-box-body-content-message-time");
   
   message.setAttribute("href", obj.CallbackUrl)
   path.setAttributeNS(null, "d", "M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979");
   path.setAttributeNS(null, "fill-rule", "evenodd"); 
   path.setAttributeNS(null, "clip-rule", "evenodd"); 
   svg.setAttributeNS(null, "width", "14"); 
   svg.setAttributeNS(null, "height", "14"); 
   svg.setAttributeNS(null, "viewBox", "0 0 14 14");

   
   message.appendChild(document.createTextNode(obj.Text));
   content_message.appendChild(message);
   
   //element.appendChild(content_message);
   svg.appendChild(path);
   time.appendChild(document.createTextNode(obj.AddedDate));
   
   content_date_time.appendChild(svg);
   content_date_time.appendChild(time);
   //element.appendChild(content_date_time);

   content_message_time.appendChild(content_message);
   content_message_time.appendChild(content_date_time);

   //element.insertBefore(content_date_time, element.firstElementChild);
   //element.insertBefore(content_message, element.firstElementChild);
   element.insertBefore(content_message_time, element.firstElementChild);
  }

  function tld_get_session_storage(){
    var obj = JSON.parse(sessionStorage.tld_notification);
    document.getElementById("tld-notification-box-body-content-message").innerHTML = obj.message;
  }

function tld_toggle_box() {
    var box = document.getElementById("tld-notification-box");
    var icon_minize = document.getElementById("tld-notification-box-launcher-icon-minimize");
    var icon_open = document.getElementById("tld-notification-box-launcher-icon-open");

    if (box.style.display === "none") {
        icon_open.style.display = "none";
        icon_minize.style.display = "block";
        box.style.display = "block";
    } else {
        box.style.display = "none";
        icon_open.style.display = "block";
        icon_minize.style.display = "none";
    }
  }

