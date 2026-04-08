feature: <feature_name>

testcases:
  - id: TC_<FEATURE>_001
    name: <testcase_name>

    preconditions:
      - type: state
        value: user is not logged in

    steps:
      - type: navigate
        target: Login screen

      - type: input
        field: email
        value: valid_email

      - type: input
        field: password
        value: valid_password

      - type: submit

    expected:
      - type: navigation
        target: Home screen