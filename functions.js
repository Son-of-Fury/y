module.exports = {
    // uptime.js & botinfo.js
        parseDur: function(ms) {
            let seconds = ms / 1000;
    
            const days = parseInt(seconds / 86400);
            seconds = seconds % 86400;
    
            const hours = parseInt(seconds / 3600);
            seconds = seconds % 3600;
    
            const minutes = parseInt(seconds / 60);
            seconds = parseInt(seconds % 60);
    
            if (days) {
                return `\`${days}\` nap, \`${hours}\` óra, \`${minutes}\` perc`;
            }
            else if (hours) {
                return `\`${hours}\` óra, \`${minutes}\` perc, \`${seconds}\` másodperc`;
            }
            else if (minutes) {
                return `\`${minutes}\` perc, \`${seconds}\` másodperc`;
            }
            return `\`${seconds}\` másodperc`;
        }
    }