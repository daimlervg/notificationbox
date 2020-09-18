function loadNotificacionsTLD() {

    document.getElementById("tld-notifications-box-body-container").style.display = "block";
    document.getElementById("tld-notifications-box-body-container").style.height = "400px";
    document.getElementById("tld-notification-box-body-filter").style.display = "none";
    document.getElementById("tld-notification-box-header").style.display = "none";
    document.getElementById("tld-notification-box-header-notification").style.display = "block";
    /*document.getElementById("tld-notification-box-header-logout").style.display = "block";*/

    if (typeof(Storage) !== "undefined") {
      // localStorage & sessionStorage support!

      var obj = JSON.parse(sessionStorage.tld_notification);
 
      if(obj != null)
      {
        for (i=0; i<obj.notifications.length; i++)
        {
          createNotificacionHtmlTLD(obj.notifications[i])
        } 
      }
      
    }
    else {
        alert("Sorry! No web storage support");
    }
  }

  function tld_set_session_storage(){ 

    //var today = new Date();
    var today = new Date(2020, 9, 9, 8, 20, 15, 0);

    var notificacion = { 'notifications' :[{
        'title':'Notification 1', 
        'CallbackUrl': 'https://www.teledolar.com/',
        'Text': 'La transferencia se realizó por un monto de 1349.00 CRC',
        'AddedDate': setFormatDateTLD('2020-09-17T11:21:19.815458'),
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

  }

  function setFormatDateTLD(server_date){

   // var local_date = new Date(2020, 8, 9, 15, 50, 15, 0);
    var local_date = new Date();
    var converted_date = new Date(server_date);

    var milliseconds = Math.abs(converted_date.valueOf() - local_date.valueOf());
    var minutes  = Math.floor((milliseconds/1000)/60); // Convert milliseconds to hours
    console.log(minutes);
    if(minutes <= 60)
      result = 
        "Hace " + minutes + " minutos";
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

  function createNotificacionHtmlTLD(obj) {

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
    var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
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

    svg.appendChild(path);
    time.appendChild(document.createTextNode(setFormatDateTLD(obj.AddedDate)));

    content_date_time.appendChild(svg);
    content_date_time.appendChild(time);

    content_message_time.appendChild(content_message);
    content_message_time.appendChild(content_date_time);

    element.insertBefore(content_message_time, element.firstElementChild);
}

function setFormatDateTLD(server_date) {

    // var local_date = new Date(2020, 8, 9, 15, 50, 15, 0);
    var local_date = new Date();
    var converted_date = new Date(server_date);

    var milliseconds = Math.abs(converted_date.valueOf() - local_date.valueOf());
    var minutes = Math.floor((milliseconds / 1000) / 60); // Convert milliseconds to minutes
    console.log(minutes);
    if (minutes <= 60)
        result =
            "Hace " + minutes + " minutos";
    else {
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

function toggleBoxTLD() {
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

function loadWidgetTLD() {
    var body = document.getElementsByTagName("BODY")[0];

    //<!-- Begin Header Box -->

    /*
      <div id="tld-notification-box-header">
        <div class="tld-notification-box-header-info">
            <div id="tld-notification-box-header-logo" class="tld-notification-box-monis-logo">
                <svg width="12" height="27" viewBox="0 0 12 27" fill="none" xmlns="http://www.w3.org/2000/svg" style="left: 0;">
                    <path d="M10.507 0.395487L1.45873 5.69123C0.554215 6.2206 -0.00200766 7.19651 7.12572e-05 8.2521L0.021899 18.8006C0.0239779 19.8551 0.584365 20.829 1.49304 21.3552L10.5632 26.608C11.0071 26.8669 11.5041 26.9958 12 27L12 0.000297546C11.4854 -0.00494389 10.9676 0.128183 10.507 0.395487Z" fill="#476B8D"></path>
                </svg>
                <svg width="12" height="27" viewBox="0 0 12 27" fill="none" xmlns="http://www.w3.org/2000/svg" style="right: 0;">
                    <path d="M1.48498 26.6047L10.4849 21.3089C11.3845 20.7795 11.9378 19.8036 11.9357 18.748L11.914 8.19943C11.9119 7.14489 11.3545 6.17106 10.4507 5.64484L1.42914 0.392047C0.987577 0.133128 0.493271 0.00419301 0 0V26.9999C0.511885 27.0051 1.02687 26.872 1.48498 26.6047Z" fill="#075279"></path>
                </svg>
                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="top: 6px; right: 5px">
                    <path d="M10.4241 7.99966C10.8729 8.57935 11.0973 9.26176 11.0973 10.0469C11.0973 10.8446 10.906 11.5522 10.5255 12.1686C10.1439 12.786 9.60616 13.2661 8.91123 13.6089C8.21631 13.9516 7.41384 14.1225 6.50382 14.1225H0.139893V0.286621H6.4852C7.23494 0.286621 7.90194 0.439665 8.48621 0.744707C9.07049 1.04975 9.52239 1.48058 9.84194 2.03511C10.1615 2.58963 10.3218 3.22907 10.3218 3.95131C10.3218 4.54986 10.1708 5.08867 9.86986 5.56877C9.56893 6.04887 9.1346 6.44511 8.56998 6.75644C9.35694 7.00592 9.97534 7.41998 10.4241 7.99966ZM6.79027 5.36331C7.11601 5.08343 7.2794 4.71863 7.2794 4.26998C7.2794 3.82133 7.11912 3.45654 6.79958 3.17561C6.48004 2.89572 6.05502 2.75526 5.52659 2.75526H3.10987V5.78471H5.48935C6.03123 5.78366 6.46452 5.64319 6.79027 5.36331ZM7.4914 11.1685C7.85437 10.8572 8.03534 10.4463 8.03534 9.93474C8.03534 9.43682 7.85437 9.03115 7.4914 8.71981C7.12843 8.40848 6.65894 8.25229 6.08087 8.25229H3.1109V11.6371H6.06226C6.6517 11.6361 7.12843 11.4809 7.4914 11.1685Z" fill="white"></path>
                </svg>       
            </div> 
            <span class="tld-notification-box-header-title">¡Hola!</span>
        </div>
        <p class="tld-notification-box-header-text">
          Queremos ayudarte a hacer la comunicación entre comercios y personas más fluida. Solamente selecciona el número del que desea recibir notificaciones.
        </p>
      </div>
    */

    var tld_notification_box = document.createElement("div");
    tld_notification_box.setAttribute("id", "tld-notification-box");
    tld_notification_box.setAttribute("style", "display: none;");
    //tld_notification_box.setAttribute("onload", "tld_set_session_storage()");

    var tld_notification_box_header = document.createElement("div");
    tld_notification_box_header.setAttribute("id", "tld-notification-box-header");

    var tld_notification_box_header_info = document.createElement("div");
    tld_notification_box_header_info.classList.add("tld-notification-box-header-info");

    var tld_notification_box_header_logo = document.createElement("div");
    tld_notification_box_header_logo.setAttribute("id", "tld-notification-box-header-logo");
    tld_notification_box_header_logo.classList.add("tld-notification-box-monis-logo");

    var svg_left = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg_left.setAttributeNS(null, "width", "12");
    svg_left.setAttributeNS(null, "height", "27");
    svg_left.setAttributeNS(null, "viewBox", "0 0 12 27");
    svg_left.setAttributeNS(null, "style", "left: 0;");

    var path_left = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_left.setAttributeNS(null, "d", "M10.507 0.395487L1.45873 5.69123C0.554215 6.2206 -0.00200766 7.19651 7.12572e-05 8.2521L0.021899 18.8006C0.0239779 19.8551 0.584365 20.829 1.49304 21.3552L10.5632 26.608C11.0071 26.8669 11.5041 26.9958 12 27L12 0.000297546C11.4854 -0.00494389 10.9676 0.128183 10.507 0.395487Z");
    path_left.setAttributeNS(null, "fill", "#476B8D");

    var svg_right = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg_right.setAttributeNS(null, "width", "12");
    svg_right.setAttributeNS(null, "height", "27");
    svg_right.setAttributeNS(null, "viewBox", "0 0 12 27");
    svg_right.setAttributeNS(null, "style", "right: 0;");

    var path_right = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_right.setAttributeNS(null, "d", "M1.48498 26.6047L10.4849 21.3089C11.3845 20.7795 11.9378 19.8036 11.9357 18.748L11.914 8.19943C11.9119 7.14489 11.3545 6.17106 10.4507 5.64484L1.42914 0.392047C0.987577 0.133128 0.493271 0.00419301 0 0V26.9999C0.511885 27.0051 1.02687 26.872 1.48498 26.6047Z");
    path_right.setAttributeNS(null, "fill", "#476B8D");

    var svg_logo = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg_logo.setAttributeNS(null, "width", "12");
    svg_logo.setAttributeNS(null, "height", "15");
    svg_logo.setAttributeNS(null, "viewBox", "0 0 12 15");
    svg_logo.setAttributeNS(null, "style", "top: 6px; right: 5px");

    var path_logo = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_logo.setAttributeNS(null, "d", "M10.4241 7.99966C10.8729 8.57935 11.0973 9.26176 11.0973 10.0469C11.0973 10.8446 10.906 11.5522 10.5255 12.1686C10.1439 12.786 9.60616 13.2661 8.91123 13.6089C8.21631 13.9516 7.41384 14.1225 6.50382 14.1225H0.139893V0.286621H6.4852C7.23494 0.286621 7.90194 0.439665 8.48621 0.744707C9.07049 1.04975 9.52239 1.48058 9.84194 2.03511C10.1615 2.58963 10.3218 3.22907 10.3218 3.95131C10.3218 4.54986 10.1708 5.08867 9.86986 5.56877C9.56893 6.04887 9.1346 6.44511 8.56998 6.75644C9.35694 7.00592 9.97534 7.41998 10.4241 7.99966ZM6.79027 5.36331C7.11601 5.08343 7.2794 4.71863 7.2794 4.26998C7.2794 3.82133 7.11912 3.45654 6.79958 3.17561C6.48004 2.89572 6.05502 2.75526 5.52659 2.75526H3.10987V5.78471H5.48935C6.03123 5.78366 6.46452 5.64319 6.79027 5.36331ZM7.4914 11.1685C7.85437 10.8572 8.03534 10.4463 8.03534 9.93474C8.03534 9.43682 7.85437 9.03115 7.4914 8.71981C7.12843 8.40848 6.65894 8.25229 6.08087 8.25229H3.1109V11.6371H6.06226C6.6517 11.6361 7.12843 11.4809 7.4914 11.1685Z");
    path_logo.setAttributeNS(null, "fill", "white");

    var tld_notification_box_header_title = document.createElement("span");
    tld_notification_box_header_title.classList.add("tld-notification-box-header-title");
    tld_notification_box_header_title.appendChild(document.createTextNode("¡Hola!"));

    var tld_notification_box_header_text = document.createElement("p");
    tld_notification_box_header_text.classList.add("tld-notification-box-header-text");
    tld_notification_box_header_text.appendChild(document.createTextNode("Queremos ayudarte a hacer la comunicación entre comercios y personas más fluida. Solamente selecciona el número del que desea recibir notificaciones."));

    svg_left.appendChild(path_left);
    svg_right.appendChild(path_right);
    svg_logo.appendChild(path_logo);
    tld_notification_box_header_logo.appendChild(svg_left);
    tld_notification_box_header_logo.appendChild(svg_right);
    tld_notification_box_header_logo.appendChild(svg_logo);
    tld_notification_box_header_info.appendChild(tld_notification_box_header_logo);
    tld_notification_box_header_info.appendChild(tld_notification_box_header_title);
    tld_notification_box_header.appendChild(tld_notification_box_header_info);
    tld_notification_box_header.appendChild(tld_notification_box_header_text);
    tld_notification_box.appendChild(tld_notification_box_header);

    body.appendChild(tld_notification_box);

    //<!-- End Header Box -->

    var tld_notification_box_header_notification = document.createElement("div");
    tld_notification_box_header_notification.setAttribute("id", "tld-notification-box-header-notification");
    tld_notification_box_header_notification.setAttribute("style", "display: none;");

    var tld_notification_box_header_logo_notification = document.createElement("div");
    tld_notification_box_header_logo_notification.setAttribute("id", "tld-notification-box-header-logo-notification");
    tld_notification_box_header_logo_notification.classList.add("tld-notification-box-monis-logo");

    var tld_notification_box_header_title = document.createElement("span");
    tld_notification_box_header_title.classList.add("tld-notification-box-header-title");
    tld_notification_box_header_title.appendChild(document.createTextNode("Notificaciones"));

    var tld_notification_box_header_logout = document.createElement("a");
    tld_notification_box_header_logout.setAttribute("id", "tld-notification-box-header-logout");
    tld_notification_box_header_logout.setAttribute("href", "");

    var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg.setAttributeNS(null, "width", "25px");
    svg.setAttributeNS(null, "height", "25px");
    svg.setAttributeNS(null, "viewBox", "0 0 511 512");

    var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path.setAttributeNS(null, "d", "m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0");

    var svg_left = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg_left.setAttributeNS(null, "width", "12");
    svg_left.setAttributeNS(null, "height", "27");
    svg_left.setAttributeNS(null, "viewBox", "0 0 12 27");
    svg_left.setAttributeNS(null, "style", "left: 0;");

    var path_left = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_left.setAttributeNS(null, "d", "M10.507 0.395487L1.45873 5.69123C0.554215 6.2206 -0.00200766 7.19651 7.12572e-05 8.2521L0.021899 18.8006C0.0239779 19.8551 0.584365 20.829 1.49304 21.3552L10.5632 26.608C11.0071 26.8669 11.5041 26.9958 12 27L12 0.000297546C11.4854 -0.00494389 10.9676 0.128183 10.507 0.395487Z");
    path_left.setAttributeNS(null, "fill", "#476B8D");

    var svg_right = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg_right.setAttributeNS(null, "width", "12");
    svg_right.setAttributeNS(null, "height", "27");
    svg_right.setAttributeNS(null, "viewBox", "0 0 12 27");
    svg_right.setAttributeNS(null, "style", "right: 0;");

    var path_right = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_right.setAttributeNS(null, "d", "M1.48498 26.6047L10.4849 21.3089C11.3845 20.7795 11.9378 19.8036 11.9357 18.748L11.914 8.19943C11.9119 7.14489 11.3545 6.17106 10.4507 5.64484L1.42914 0.392047C0.987577 0.133128 0.493271 0.00419301 0 0V26.9999C0.511885 27.0051 1.02687 26.872 1.48498 26.6047Z");
    path_right.setAttributeNS(null, "fill", "#476B8D");

    var svg_logo = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg_logo.setAttributeNS(null, "width", "12");
    svg_logo.setAttributeNS(null, "height", "15");
    svg_logo.setAttributeNS(null, "viewBox", "0 0 12 15");
    svg_logo.setAttributeNS(null, "style", "top: 6px; right: 5px");

    var path_logo = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_logo.setAttributeNS(null, "d", "M10.4241 7.99966C10.8729 8.57935 11.0973 9.26176 11.0973 10.0469C11.0973 10.8446 10.906 11.5522 10.5255 12.1686C10.1439 12.786 9.60616 13.2661 8.91123 13.6089C8.21631 13.9516 7.41384 14.1225 6.50382 14.1225H0.139893V0.286621H6.4852C7.23494 0.286621 7.90194 0.439665 8.48621 0.744707C9.07049 1.04975 9.52239 1.48058 9.84194 2.03511C10.1615 2.58963 10.3218 3.22907 10.3218 3.95131C10.3218 4.54986 10.1708 5.08867 9.86986 5.56877C9.56893 6.04887 9.1346 6.44511 8.56998 6.75644C9.35694 7.00592 9.97534 7.41998 10.4241 7.99966ZM6.79027 5.36331C7.11601 5.08343 7.2794 4.71863 7.2794 4.26998C7.2794 3.82133 7.11912 3.45654 6.79958 3.17561C6.48004 2.89572 6.05502 2.75526 5.52659 2.75526H3.10987V5.78471H5.48935C6.03123 5.78366 6.46452 5.64319 6.79027 5.36331ZM7.4914 11.1685C7.85437 10.8572 8.03534 10.4463 8.03534 9.93474C8.03534 9.43682 7.85437 9.03115 7.4914 8.71981C7.12843 8.40848 6.65894 8.25229 6.08087 8.25229H3.1109V11.6371H6.06226C6.6517 11.6361 7.12843 11.4809 7.4914 11.1685Z");
    path_logo.setAttributeNS(null, "fill", "white");
    

    svg.appendChild(path);
    tld_notification_box_header_logout.appendChild(svg);
    svg_left.appendChild(path_left);
    svg_right.appendChild(path_right);
    svg_logo.appendChild(path_logo);
    tld_notification_box_header_logo_notification.appendChild(svg_left);
    tld_notification_box_header_logo_notification.appendChild(svg_right);
    tld_notification_box_header_logo_notification.appendChild(svg_logo);
    tld_notification_box_header_notification.appendChild(tld_notification_box_header_logo_notification);
    tld_notification_box_header_notification.appendChild(tld_notification_box_header_title);
    tld_notification_box_header_notification.appendChild(tld_notification_box_header_logout);

    tld_notification_box.appendChild(tld_notification_box_header_notification);


    //<!-- Begin Body Box -->

    /*
      <div id="tld-notification-box-body">
        <div id="tld-notification-box-body-filter" class="tld-notification-box-body-content"> 
            <label for="phones">Teléfono</label>
            <select name="phones" class="tld-notification-box-body-content-ddl">
                <option>88774455</option>
                <option>88997744</option>
            </select>
            <button tabindex="0" id="tld-notification-box-start-process" onclick="tld_load()">
                <svg focusable="false" aria-hidden="true">
                    <path d="M1.5 13.864L7.864 7.5 1.5 1.136" stroke-width="2.5" fill="none" fill-rule="evenodd"></path>
                </svg>
            </button>
        </div>
      </div>
    */

    var tld_notification_box_body = document.createElement("div");
    tld_notification_box_body.setAttribute("id", "tld-notification-box-body");
    
   

    var tld_notification_box_body_filter = document.createElement("div");
    tld_notification_box_body_filter.setAttribute("id", "tld-notification-box-body-filter");
    tld_notification_box_body_filter.classList.add("tld-notification-box-body-content");

    var label_phones = document.createElement("label");
    label_phones.setAttribute("for", "phones");
    label_phones.appendChild(document.createTextNode("Teléfono"));

    var tld_notification_box_body_content_ddl = document.createElement("select");
    tld_notification_box_body_content_ddl.setAttribute("name", "phones");
    tld_notification_box_body_content_ddl.classList.add("tld-notification-box-body-content-ddl");
    var tld_notification_box_body_content_ddl_option = document.createElement("option");
    tld_notification_box_body_content_ddl_option.appendChild(document.createTextNode("88774455"));
    //tld_notification_box_body_content_ddl_option.appendChild(document.createTextNode("88997744"));

    var tld_notification_box_start_process = document.createElement("button");
    tld_notification_box_start_process.setAttribute("id", "tld-notification-box-start-process");
    tld_notification_box_start_process.setAttribute("onclick", "loadNotificacionsTLD()");

    var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");

    var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path.setAttributeNS(null, "d", "M1.5 13.864L7.864 7.5 1.5 1.136");
    path.setAttributeNS(null, "stroke-width", "2.5")
    path.setAttributeNS(null, "fill", "none")
    path.setAttributeNS(null, "fill-rule", "evenodd")

    svg.appendChild(path);
    tld_notification_box_start_process.appendChild(svg);

    tld_notification_box_body_filter.appendChild(label_phones);
    tld_notification_box_body_filter.appendChild(tld_notification_box_body_content_ddl);
    tld_notification_box_body_content_ddl.appendChild(tld_notification_box_body_content_ddl_option);
    tld_notification_box_body_filter.appendChild(tld_notification_box_start_process);
    tld_notification_box_body.appendChild(tld_notification_box_body_filter);

    tld_notification_box.appendChild(tld_notification_box_body);



    /*tld-notifications-box-body-container
    * Al iniciar el proceso
    */

    /*
      <div id="tld-notification-box-body">
        <div id="tld-notifications-box-body-container">
            <div class="tld-notification-box-body-content">
                <div id="tld-notifications-box-body-content-messages">    
                    <div class="tld-notification-box-body-content-message">
                        <a href="#">La transferencia se realizó por un monto de 60000.00 CRC </a> 
                    </div>
                    <div class="tld-notification-box-body-content-message-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path fill-rule="evenodd" d="M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Hace 1 min</span>
                    </div>   
                </div>                       
            </div>
        </div>
      </div>
    */


    var tld_notifications_box_body_container = document.createElement("div");
    tld_notifications_box_body_container.setAttribute("id", "tld-notifications-box-body-container");

    var tld_notification_box_body_content = document.createElement("div");
    tld_notification_box_body_content.classList.add("tld-notification-box-body-content");

    var tld_notifications_box_body_content_messages = document.createElement("div");
    tld_notifications_box_body_content_messages.setAttribute("id", "tld-notifications-box-body-content-messages");

    tld_notification_box_body_content.appendChild(tld_notifications_box_body_content_messages);
    tld_notifications_box_body_container.appendChild(tld_notification_box_body_content);

    tld_notification_box.appendChild(tld_notifications_box_body_container);

    //<!-- End Body Box -->

    //Footer

    var tld_notification_box_footer = document.createElement("div");
    tld_notification_box_footer.setAttribute("id", "tld-notification-box-footer");
    var tld_notification_box_footer_link = document.createElement("a");
    tld_notification_box_footer_link.setAttribute("href", "https://www.teledolar.com");
    tld_notification_box_footer_link.setAttribute("target", "_blank");

    var tld_notification_box_footer_img = document.createElement("img");
    tld_notification_box_footer_img.setAttribute("src", "https://www.teledolar.com/graphics/logo.PNG");
    tld_notification_box_footer_img.setAttribute("alt", "Teledolar S.A");
    tld_notification_box_footer_img.setAttribute("width", "64");
    tld_notification_box_footer_img.setAttribute("height", "19");

    /*var tld_notification_box_footer_span_orange = document.createElement("span");
    tld_notification_box_footer_span_orange.classList.add("tld-orange");
    var tld_notification_box_footer_span_green = document.createElement("span");
    tld_notification_box_footer_span_green.classList.add("tld-green");*/

    tld_notification_box_footer_link.appendChild(tld_notification_box_footer_img);
    tld_notification_box_footer.appendChild(tld_notification_box_footer_link);

    tld_notification_box.appendChild(tld_notification_box_footer);

    //Open Icon
    var tld_notification_box_launcher_icon_open = document.createElement("div");
    tld_notification_box_launcher_icon_open.setAttribute("id", "tld-notification-box-launcher-icon-open");
    tld_notification_box_launcher_icon_open.classList.add("tld-notification-box-launcher");
    tld_notification_box_launcher_icon_open.classList.add("tld-launcher");
    tld_notification_box_launcher_icon_open.setAttribute("onclick", "toggleBoxTLD()");
    tld_notification_box_launcher_icon_open.setAttribute("style", "display: block;");

    var tld_notification_box_launcher_icon = document.createElement("div");
    tld_notification_box_launcher_icon.classList.add("tld-notification-box-launcher-icon");


    var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 38 28");

    var path1 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path2 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path3 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path4 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path5 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path6 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path7 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    var path8 = document.createElementNS('http://www.w3.org/2000/svg', "path");

    path1.setAttributeNS(null, "d", "M33.7844 27.9995C33.6055 28.0034 33.4308 27.9451 33.29 27.8347L29.1205 24.7035H18.9522C17.8624 24.6991 16.8187 24.2631 16.0496 23.491C15.2805 22.7188 14.8487 21.6733 14.8487 20.5835V10.6954C14.8465 10.1551 14.951 9.61971 15.1563 9.11994C15.3615 8.62017 15.6635 8.16585 16.0447 7.78305C16.426 7.40026 16.8791 7.09652 17.378 6.88926C17.877 6.68201 18.4119 6.57532 18.9522 6.57533H33.7844C34.3266 6.57094 34.8644 6.67451 35.3662 6.88C35.8681 7.0855 36.324 7.38881 36.7075 7.77227C37.0909 8.15573 37.3942 8.61167 37.5997 9.11352C37.8052 9.61537 37.9088 10.1531 37.9044 10.6954V20.5835C37.907 21.5321 37.5796 22.4521 36.9783 23.1857C36.3769 23.9194 35.5391 24.421 34.6084 24.6046V27.1755C34.6068 27.3296 34.5629 27.4802 34.4816 27.611C34.4002 27.7418 34.2844 27.8477 34.1469 27.9171C34.0332 27.9698 33.9097 27.9979 33.7844 27.9995ZM18.9522 8.22335C18.6284 8.22334 18.3077 8.28739 18.0087 8.41183C17.7097 8.53626 17.4383 8.71861 17.21 8.94837C16.9818 9.17814 16.8013 9.45079 16.6788 9.75061C16.5564 10.0504 16.4945 10.3715 16.4967 10.6954V20.5835C16.4945 20.9073 16.5564 21.2284 16.6788 21.5282C16.8013 21.828 16.9818 22.1007 17.21 22.3305C17.4383 22.5602 17.7097 22.7426 18.0087 22.867C18.3077 22.9914 18.6284 23.0555 18.9522 23.0555H29.3842C29.5623 23.0567 29.7354 23.1144 29.8786 23.2203L32.9604 25.5275V23.8795C32.9604 23.661 33.0472 23.4514 33.2017 23.2968C33.3562 23.1423 33.5658 23.0555 33.7844 23.0555C34.44 23.0555 35.0688 22.795 35.5324 22.3314C35.9959 21.8679 36.2564 21.2391 36.2564 20.5835V10.6954C36.2586 10.3701 36.1961 10.0477 36.0727 9.74678C35.9492 9.44587 35.7672 9.17249 35.5372 8.9425C35.3072 8.71252 35.0339 8.53051 34.733 8.40706C34.432 8.2836 34.1096 8.22115 33.7844 8.22335H18.9522Z");
    path2.setAttributeNS(null, "d", "M32.1362 13.168H20.6001C20.3816 13.168 20.172 13.0812 20.0175 12.9267C19.8629 12.7722 19.7761 12.5626 19.7761 12.344C19.7761 12.1255 19.8629 11.9159 20.0175 11.7614C20.172 11.6068 20.3816 11.52 20.6001 11.52H32.1362C32.3548 11.52 32.5644 11.6068 32.7189 11.7614C32.8734 11.9159 32.9602 12.1255 32.9602 12.344C32.9602 12.5626 32.8734 12.7722 32.7189 12.9267C32.5644 13.0812 32.3548 13.168 32.1362 13.168Z");
    path3.setAttributeNS(null, "d", "M33.7844 27.9995C33.6055 28.0034 33.4308 27.9451 33.29 27.8347L29.1205 24.7035H18.9522C17.8624 24.6991 16.8187 24.2631 16.0496 23.491C15.2805 22.7188 14.8487 21.6733 14.8487 20.5835V10.6954C14.8465 10.1551 14.951 9.61971 15.1563 9.11994C15.3615 8.62017 15.6635 8.16585 16.0447 7.78305C16.426 7.40026 16.8791 7.09652 17.378 6.88926C17.877 6.68201 18.4119 6.57532 18.9522 6.57533H33.7844C34.3266 6.57094 34.8644 6.67451 35.3662 6.88C35.8681 7.0855 36.324 7.38881 36.7075 7.77227C37.0909 8.15573 37.3942 8.61167 37.5997 9.11352C37.8052 9.61537 37.9088 10.1531 37.9044 10.6954V20.5835C37.907 21.5321 37.5796 22.4521 36.9783 23.1857C36.3769 23.9194 35.5391 24.421 34.6084 24.6046V27.1755C34.6068 27.3296 34.5629 27.4802 34.4816 27.611C34.4002 27.7418 34.2844 27.8477 34.1469 27.9171C34.0332 27.9698 33.9097 27.9979 33.7844 27.9995ZM18.9522 8.22335C18.6284 8.22334 18.3077 8.28739 18.0087 8.41183C17.7097 8.53626 17.4383 8.71861 17.21 8.94837C16.9818 9.17814 16.8013 9.45079 16.6788 9.75061C16.5564 10.0504 16.4945 10.3715 16.4967 10.6954V20.5835C16.4945 20.9073 16.5564 21.2284 16.6788 21.5282C16.8013 21.828 16.9818 22.1007 17.21 22.3305C17.4383 22.5602 17.7097 22.7426 18.0087 22.867C18.3077 22.9914 18.6284 23.0555 18.9522 23.0555H29.3842C29.5623 23.0567 29.7354 23.1144 29.8786 23.2203L32.9604 25.5275V23.8795C32.9604 23.661 33.0472 23.4514 33.2017 23.2968C33.3562 23.1423 33.5658 23.0555 33.7844 23.0555C34.44 23.0555 35.0688 22.795 35.5324 22.3314C35.9959 21.8679 36.2564 21.2391 36.2564 20.5835V10.6954C36.2586 10.3701 36.1961 10.0477 36.0727 9.74678C35.9492 9.44587 35.7672 9.17249 35.5372 8.9425C35.3072 8.71252 35.0339 8.53051 34.733 8.40706C34.432 8.2836 34.1096 8.22115 33.7844 8.22335H18.9522Z");
    path4.setAttributeNS(null, "d", "M32.1362 16.4639H20.6001C20.3816 16.4639 20.172 16.3771 20.0175 16.2226C19.8629 16.0681 19.7761 15.8585 19.7761 15.6399C19.7761 15.4214 19.8629 15.2118 20.0175 15.0573C20.172 14.9027 20.3816 14.8159 20.6001 14.8159H32.1362C32.3548 14.8159 32.5644 14.9027 32.7189 15.0573C32.8734 15.2118 32.9602 15.4214 32.9602 15.6399C32.9602 15.8585 32.8734 16.0681 32.7189 16.2226C32.5644 16.3771 32.3548 16.4639 32.1362 16.4639Z");
    path5.setAttributeNS(null, "d", "M32.1362 19.7603H20.6001C20.3816 19.7603 20.172 19.6735 20.0175 19.519C19.8629 19.3644 19.7761 19.1549 19.7761 18.9363C19.7761 18.7178 19.8629 18.5082 20.0175 18.3537C20.172 18.1991 20.3816 18.1123 20.6001 18.1123H32.1362C32.3548 18.1123 32.5644 18.1991 32.7189 18.3537C32.8734 18.5082 32.9602 18.7178 32.9602 18.9363C32.9602 19.1549 32.8734 19.3644 32.7189 19.519C32.5644 19.6735 32.3548 19.7603 32.1362 19.7603Z");
    path6.setAttributeNS(null, "d", "M4.12007 19.7597C3.99476 19.7581 3.87121 19.73 3.7575 19.6773C3.62001 19.6079 3.50426 19.502 3.42288 19.3712C3.3415 19.2404 3.29763 19.0898 3.29606 18.9357V16.3813C2.36402 16.1942 1.52584 15.6894 0.924691 14.953C0.323539 14.2166 -0.00329106 13.2943 2.49873e-05 12.3437V4.10359C2.06303e-05 3.56332 0.106706 3.02836 0.313959 2.52941C0.521212 2.03047 0.824952 1.57736 1.20775 1.1961C1.59055 0.814829 2.04487 0.512906 2.54464 0.307655C3.04441 0.102403 3.57979 -0.00213669 4.12007 3.30959e-05H17.3042C17.8445 -0.00213669 18.3798 0.102403 18.8796 0.307655C19.3794 0.512906 19.8337 0.814829 20.2165 1.1961C20.5993 1.57736 20.903 2.03047 21.1103 2.52941C21.3176 3.02836 21.4242 3.56332 21.4242 4.10359V7.39962C21.4242 7.61816 21.3374 7.82775 21.1829 7.98229C21.0284 8.13682 20.8188 8.22363 20.6002 8.22363C20.3817 8.22363 20.1721 8.13682 20.0176 7.98229C19.863 7.82775 19.7762 7.61816 19.7762 7.39962V4.10359C19.7762 3.77973 19.7122 3.45907 19.5877 3.16007C19.4633 2.86107 19.281 2.58964 19.0512 2.36141C18.8214 2.13317 18.5488 1.95264 18.249 1.83021C17.9491 1.70779 17.628 1.64588 17.3042 1.64805H4.12007C3.79621 1.64588 3.47513 1.70779 3.17531 1.83021C2.87548 1.95264 2.60284 2.13317 2.37307 2.36141C2.1433 2.58964 1.96095 2.86107 1.83652 3.16007C1.71209 3.45907 1.64803 3.77973 1.64804 4.10359V12.3437C1.64585 12.6689 1.7083 12.9914 1.83175 13.2923C1.95521 13.5932 2.13721 13.8666 2.3672 14.0965C2.59718 14.3265 2.87057 14.5085 3.17148 14.632C3.47239 14.7554 3.79482 14.8179 4.12007 14.8157C4.34015 14.8157 4.55147 14.9019 4.70863 15.056C4.86579 15.2101 4.95624 15.4197 4.96055 15.6397V17.2877L8.04234 14.9805C8.19045 14.8844 8.36061 14.8277 8.53675 14.8157H12.3601C12.5802 14.82 12.7898 14.9105 12.9438 15.0676C13.0979 15.2248 13.1842 15.4361 13.1842 15.6562C13.1798 15.8719 13.0911 16.0772 12.9371 16.2282C12.783 16.3792 12.5759 16.4638 12.3601 16.4637H8.78395L4.61447 19.5949C4.47365 19.7053 4.29895 19.7636 4.12007 19.7597Z");
    path7.setAttributeNS(null, "d", "M14.0082 6.57575H5.7681C5.54956 6.57575 5.33997 6.48894 5.18544 6.3344C5.03091 6.17987 4.94409 5.97028 4.94409 5.75174C4.94409 5.5332 5.03091 5.32361 5.18544 5.16908C5.33997 5.01455 5.54956 4.92773 5.7681 4.92773H14.0082C14.2267 4.92773 14.4363 5.01455 14.5908 5.16908C14.7454 5.32361 14.8322 5.5332 14.8322 5.75174C14.8322 5.97028 14.7454 6.17987 14.5908 6.3344C14.4363 6.48894 14.2267 6.57575 14.0082 6.57575Z");
    path8.setAttributeNS(null, "d", "M10.7121 11.5362H5.7681C5.54956 11.5362 5.33997 11.4494 5.18544 11.2949C5.03091 11.1403 4.94409 10.9307 4.94409 10.7122C4.94409 10.4937 5.03091 10.2841 5.18544 10.1295C5.33997 9.975 5.54956 9.88818 5.7681 9.88818H10.7121C10.9307 9.88818 11.1403 9.975 11.2948 10.1295C11.4493 10.2841 11.5362 10.4937 11.5362 10.7122C11.5362 10.9307 11.4493 11.1403 11.2948 11.2949C11.1403 11.4494 10.9307 11.5362 10.7121 11.5362Z");


    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    svg.appendChild(path4);
    svg.appendChild(path5);
    svg.appendChild(path6);
    svg.appendChild(path7);
    svg.appendChild(path8);

    tld_notification_box_launcher_icon.appendChild(svg);
    tld_notification_box_launcher_icon_open.appendChild(tld_notification_box_launcher_icon);

    body.appendChild(tld_notification_box_launcher_icon_open);

    //Minimize Icon

    var tld_notification_box_launcher_icon_minimize = document.createElement("div");
    tld_notification_box_launcher_icon_minimize.setAttribute("id", "tld-notification-box-launcher-icon-minimize");
    tld_notification_box_launcher_icon_minimize.classList.add("tld-notification-box-launcher");
    tld_notification_box_launcher_icon_minimize.classList.add("tld-launcher");
    tld_notification_box_launcher_icon_minimize.setAttribute("onclick", "toggleBoxTLD()");
    tld_notification_box_launcher_icon_minimize.setAttribute("style", "display: none;");

    var tld_notification_box_launcher_icon = document.createElement("div");
    tld_notification_box_launcher_icon.classList.add("tld-notification-box-launcher-icon");

    var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 16 14");

    var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path.setAttributeNS(null, "d", "M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z");
    path.setAttributeNS(null, "clip-rule", "evenodd");
    path.setAttributeNS(null, "fill-rule", "evenodd");

    svg.appendChild(path);
    tld_notification_box_launcher_icon.appendChild(svg);
    tld_notification_box_launcher_icon_minimize.appendChild(tld_notification_box_launcher_icon);

    body.appendChild(tld_notification_box_launcher_icon_minimize);

}

  function toggleBoxTLD() {
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

