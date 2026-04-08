id: TC_LOGIN_001
name: Login success

setup:
  setup_app: true

steps:
  - action: touch
    text_contains: "Email"

  - action: input
    text: "user@gmail.com"

  - action: touch
    text_contains: "Password"

  - action: input
    text: "123456"

  - action: touch
    text_contains: "Login"

asserts:
  - type: exists
    text_contains: "Home"

  - type: not_exists
    text_contains: "Invalid"

id: TC_LOGIN_002
id: TC_LOGIN_003
...