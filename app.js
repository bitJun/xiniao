module.exports = {
    "apps": [
        {
            "name": "mywork",
            "cwd": "/srv/node-app/current",
            "script": "./server.js",
            "log_date_format": "YYYY-MM-DD HH:mm Z",
            "error_file": "/var/log/node-app/node-app.stderr.log",
            "out_file": "log/node-app.stdout.log",
            "pid_file": "pids/node-geo-api.pid",
            "instances": 6,
            "min_uptime": "200s",
            "max_restarts": 10,
            "max_memory_restart": "1M",
            "cron_restart": "1 0 * * *",
            "watch": false,
            "merge_logs": true,
            "exec_interpreter": "node",
            "exec_mode": "fork",
            "autorestart": false,
            "vizion": false

            
        }
    ]
}
