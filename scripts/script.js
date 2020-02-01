"use strict";

const str = " .. \"test me\" .. \"Say \\\"Hello\\\"!\" .. \"\\\\ \\\" .. ";
const regex = /"(?:\\"|.)*?"/g;
alert(str.match(regex));
