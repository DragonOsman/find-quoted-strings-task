"use strict";

const str = " .. \"test me\" .. \"Say \\\"Hello\\\"!\" .. \"\\\\ \\\" .. ";
const regex = /"(?:(?:\\"|[^"])*)"/g; // Taken from SO
alert(str.match(regex));
