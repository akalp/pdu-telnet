from telnetlib import Telnet
import sys
from .commands import Commands, Texts

new_line = "\r\n"

user = "USERNAME"
password = "PASSWORD"

tn = Telnet(sys.argv[1])

tn.read_until(Texts.LOGIN)
tn.write(user + new_line)
tn.read_until(Texts.PASSWORD)
tn.write(password + new_line)


print(tn.read_all())

tn.write("quit\n")
