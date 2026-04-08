feature: <feature_name>

testcases:
  - id: TC_<FEATURE>_001
    name: <testcase_name>
    description: <optional>

    preconditions:
      - type: state
        value: <system_state>

    steps:
      - id: step_1
        type: navigate
        target: <screen_name>

      - id: step_2
        type: input
        field: <business_field_name>
        value: <test_data>
        ui_hint:
          text_contains: "<UI text of field>"

      - id: step_3
        type: input
        field: <business_field_name>
        value: <test_data>
        ui_hint:
          text_contains: "<UI text of field>"

      - id: step_4
        type: submit
        target: <logical_button_name>
        ui_hint:
          text_contains: "<button text>"

    expected:
      - type: navigation
        target: <screen_name>
        ui_hint:
          text_contains: "<text on target screen>"

      - type: not_exists
        target: <error_message>
        ui_hint:
          text_contains: "<error text>"

  - id: TC_<FEATURE>_002
  - id: TC_<FEATURE>_003
  - ...