window.addEventListener('message', procMessage, false);

            function procMessage(event) {
                var message = JSON.parse(event.data);

                if (message.messageType === 'focus') {
                    var iframe = message.iframe;
                    var frame = getFrame(iframe);
                    if (frame) {
                        frame.document.getElementById(message.elem).focus();
                    }
                }
            }
            
            function getFrame(frameName) {
                for (var i = 0; i < parent.frames.length; i++) {
                    try {
                        var path = parent.frames[i].location.pathname.replace('/iframe/','');
                        if (path === frameName) {
                            return parent.frames[i];
                        }
                    } catch (error) {
                        continue;
                    }
                }
            }