YAML Testcase
Ví dụ:

```YAML
id: TC_001
name: TC_Name
description: TC_Description
owner: v.anhcbt@vinfast.vn
tags: []

setup:
  setup_app: true

steps:
  - action: open_app
    package: 'package'

  - action: close_app
    package: 'package'

  - action: input
    text: 'Text'

  - action: key
    key: 4

  - action: touch
    text: 'Text'

  - action: touch_image
    template: 'image_path'

  - action: tap
    x: 0
    y: 0

  - action: press
    text_contains: "Text"
    duration_ms: 800

  - action: swipe
    x1: 540
    y1: 1500
    x2: 540
    y2: 500

  - action: swipe_until_text
    text_contains: "Text"

  - action: wait_until
    text: 'Text'

  - action: sleep
    duration: 5.0

  - action: run_common
    path: 'path'

assert:
  - type: exists
    text_contains: 'Expected Text'

  - type: not_exists
    text_contains: 'Unexpected Text'

  - type: text_in_dump
    text: 'Expected Text'

  - type: text_not_in_dump
    text: 'Unexpected Text'
```