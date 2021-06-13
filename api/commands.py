class Commands:
    READ_STATUS_SIMPLE = "read status o0{outlet_id} simple{new_line}"
    READ_STATUS_FORMAT = "read status o0{outlet_id} format{new_line}"
    SET_OUTLET_STATUS_IMME = "sw o0{outlet_id} {status} imme{new_line}"
    SET_OUTLET_STATUS_DELAY = "sw o0{outlet_id} {status} delay{new_line}"
    QUIT = "quit{new_line}"


class Texts:
    LOGIN = "Login: "
    PASSWORD = "Password: "
    LOGIN_SUCCESS = "{new_line}Logged in successfully{new_line}{new_line}PE Telnet server 1.1{new_line}"
    LOGIN_FAILED = "{new_line}Incorrect username or password!{new_line}"
    QUIT = "Bye!"
