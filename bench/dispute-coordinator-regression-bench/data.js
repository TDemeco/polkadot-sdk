window.BENCHMARK_DATA = {
  "lastUpdate": 1751549453516,
  "repoUrl": "https://github.com/paritytech/polkadot-sdk",
  "entries": {
    "dispute-coordinator-regression-bench": [
      {
        "commit": {
          "author": {
            "email": "eresav@me.com",
            "name": "Andrei Eres",
            "username": "AndreiEres"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "83b0409093f811acb412b07ac7219b7ad1a514ff",
          "message": "[subsystem-bench] Add Dispute Coordinator subsystem benchmark (#8828)\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/8811\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-03T12:22:23Z",
          "tree_id": "7dedca9f4f5317f038bb7713852df1f21eeee806",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/83b0409093f811acb412b07ac7219b7ad1a514ff"
        },
        "date": 1751549436117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 227.09999999999997,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 23.800000000000004,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.005595405729999999,
            "unit": "seconds"
          },
          {
            "name": "dispute-distribution",
            "value": 0.008679936599999995,
            "unit": "seconds"
          },
          {
            "name": "dispute-coordinator",
            "value": 0.0026281824699999996,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}