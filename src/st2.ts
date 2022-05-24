const completionSpec: Fig.Spec = {
  name: "st2",
  description: "CLI for StackStorm event-driven automation platform",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  subcommands: [
    {
      name: "run",
      description: "Invoke an action manually",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for run",
        },
        {
          name: ["--token", "-t"],
          description:
            "Access token for user authentication; $ST2_AUTH_TOKEN by default",
        },
        {
          name: "--api-key",
          description:
            "Api Key for user authentication; $ST2_API_KEY by default",
        },
        {
          name: ["--json", "-j"],
          description: "Print output in JSON format",
        },
        {
          name: ["--yaml", "-y"],
          description: "Print output in YAML format",
        },
        {
          name: "--attr",
          description:
            "List of attributes to include in the output; 'all' or unspecified will return all attributes",
          args: {
            name: "ATTR",
            isVariadic: true,
            suggestions: ["all"],
          },
        },
        {
          name: ["--detail", "-d"],
          description: "Display full detail of the execution in table format",
        },
        {
          name: ["--key", "-k"],
          description:
            "If result is type of JSON, then print specific key-value pair; dot notation for nested JSON is supported",
          args: {
            name: "KEY",
          },
        },
        {
          name: "--delay",
          description:
            "How long (in milliseconds) to delay the execution before scheduling",
          args: {
            name: "DELAY",
          },
        },
        {
          name: "--tail",
          description: "Automatically start tailing new execution",
        },
        {
          name: "--auto-dict",
          description:
            "Automatically convert list items to dictionaries when colons are detected",
        },
        {
          name: ["--trace-tag", "--trace_tag"],
          description: "A trace tag string to track execution later",
          args: {
            name: "TRACE_TAG",
          },
        },
        {
          name: "--trace-id",
          description: "Existing trace id for this execution",
          args: {
            name: "TRACE_ID",
          },
        },
        {
          name: ["--async", "-a"],
          description: "Do not wait for action to finish",
        },
        {
          name: ["--inherit-env", "-e"],
          description:
            "Pass all the environment variables which are accessible to the CLI as 'env' parameter to the action; only works with python, local and remote runners",
        },
        {
          name: ["--user", "-u"],
          description: "User under which to run the action (admins only)",
        },
      ],
      args: [
        {
          name: "ref-or-id",
          description:
            "Action reference (pack.action_name) or ID of the action",
        },
        {
          name: "parameters",
          description:
            "List of keyword args, positional args, and optional args for the action",
        },
      ],
    },
    {
      name: "action",
      description:
        "An activity that happens as a response to the external event",
      subcommands: [
        {
          name: "list",
          description: "Get the list of actions",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: "--attr",
              description:
                "List of attributes to include in the output; 'all' or unspecified will return all attributes",
              args: {
                name: "ATTR",
                isVariadic: true,
                suggestions: ["all"],
              },
            },
            {
              name: ["--width", "-w"],
              description: "Set the width of columns in output",
              args: {
                name: "WIDTH",
                isVariadic: true,
                suggestions: ["25"],
              },
            },
            {
              name: ["--pack", "-p"],
              description:
                "Only return resources belonging to the provided pack",
              args: {
                name: "PACK",
                isVariadic: true,
                suggestions: ["core"],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get individual action",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: "--attr",
              description:
                "List of attributes to include in the output; 'all' or unspecified will return all attributes",
              args: {
                name: "ATTR",
                isVariadic: true,
                suggestions: ["all"],
              },
            },
          ],
          args: {
            name: "ref-or-id",
            isVariadic: true,
            description:
              "Action reference (pack.action_name) or ID of the action",
          },
        },
        {
          name: "create",
          description: "Create a new action",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: {
            name: "file",
            description: "JSON/YAML file containing the action to create",
            template: "filepaths",
          },
        },
        {
          name: "update",
          description: "Update an existing action",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: [
            {
              name: "ref-or-id",
              description: "Reference or ID of the action",
            },
            {
              name: "file",
              description: "JSON/YAML file containing the action to update",
              template: "filepaths",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing action",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: ["--remove-files", "-r"],
              description: "Remove action files from disk",
            },
          ],
          args: {
            name: "ref-or-id",
            description: "Reference or ID of the action",
          },
        },
        {
          name: "enable",
          description: "Enable an existing action",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: {
            name: "ref-or-id",
            description: "Reference or ID of the action",
          },
        },
        {
          name: "disable",
          description: "Disable an existing action",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: {
            name: "ref-or-id",
            description: "Reference or ID of the action",
          },
        },
        {
          name: "execute",
          description: "Invoke an action manually",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: "--attr",
              description:
                "List of attributes to include in the output; 'all' or unspecified will return all attributes",
              args: {
                name: "ATTR",
                isVariadic: true,
                suggestions: ["all"],
              },
            },
            {
              name: ["--detail", "-d"],
              description:
                "Display full detail of the execution in table format",
            },
            {
              name: ["--key", "-k"],
              description:
                "If result is type of JSON, then print specific key-value pair; dot notation for nested JSON is supported",
              args: {
                name: "KEY",
              },
            },
            {
              name: "--delay",
              description:
                "How long (in milliseconds) to delay the execution before scheduling",
              args: {
                name: "DELAY",
              },
            },
            {
              name: "--tail",
              description: "Automatically start tailing new execution",
            },
            {
              name: "--auto-dict",
              description:
                "Automatically convert list items to dictionaries when colons are detected",
            },
            {
              name: ["--trace-tag", "--trace_tag"],
              description: "A trace tag string to track execution later",
              args: {
                name: "TRACE_TAG",
              },
            },
            {
              name: "--trace-id",
              description: "Existing trace id for this execution",
              args: {
                name: "TRACE_ID",
              },
            },
            {
              name: ["--async", "-a"],
              description: "Do not wait for action to finish",
            },
            {
              name: ["--inherit-env", "-e"],
              description:
                "Pass all the environment variables which are accessible to the CLI as 'env' parameter to the action; only works with python, local and remote runners",
            },
          ],
          args: {
            name: "ref-or-id",
            description: "Reference or ID of the action",
          },
        },
      ],
    },
    {
      name: "action-alias",
      description: "Action aliases",
      subcommands: [
        {
          name: "list",
          description: "Get the list of actions",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: "--attr",
              description:
                "List of attributes to include in the output; 'all' or unspecified will return all attributes",
              args: {
                name: "ATTR",
                isVariadic: true,
                suggestions: ["all"],
              },
            },
            {
              name: ["--width", "-w"],
              description: "Set the width of columns in output",
              args: {
                name: "WIDTH",
                isVariadic: true,
                suggestions: ["25"],
              },
            },
            {
              name: ["--pack", "-p"],
              description:
                "Only return resources belonging to the provided pack",
              args: {
                name: "PACK",
                isVariadic: true,
                suggestions: ["core"],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get individual action alias",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: "--attr",
              description:
                "List of attributes to include in the output; 'all' or unspecified will return all attributes",
              args: {
                name: "ATTR",
                isVariadic: true,
                suggestions: ["all"],
              },
            },
          ],
          args: {
            name: "ref-or-id",
            isVariadic: true,
            description:
              "Action reference (pack.action_name) or ID of the action alias",
          },
        },
        {
          name: "create",
          description: "Create a new action alias",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: {
            name: "file",
            description: "JSON/YAML file containing the action alias to create",
            template: "filepaths",
          },
        },
        {
          name: "update",
          description: "Update an existing action alias",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: [
            {
              name: "ref-or-id",
              description: "Reference or ID of the action alias",
            },
            {
              name: "file",
              description:
                "JSON/YAML file containing the action alias to update",
              template: "filepaths",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing action alias",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
          ],
          args: {
            name: "ref-or-id",
            description: "Reference or ID of the action alias",
          },
        },
        {
          name: "match",
          description: "Get the action alias that match the command text",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: "--attr",
              description:
                "List of attributes to include in the output; 'all' or unspecified will return all attributes",
              args: {
                name: "ATTR",
                isVariadic: true,
                suggestions: ["all"],
              },
            },
            {
              name: ["--width", "-w"],
              description: "Set the width of columns in output",
              args: {
                name: "WIDTH",
                isVariadic: true,
                suggestions: ["25"],
              },
            },
          ],
          args: {
            name: "command",
            description: "Get the action alias that match the command text",
          },
        },
        {
          name: "execute",
          description:
            "Execute the command text by finding a matching action alias",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for run",
            },
            {
              name: ["--token", "-t"],
              description:
                "Access token for user authentication; $ST2_AUTH_TOKEN by default",
            },
            {
              name: "--api-key",
              description:
                "Api Key for user authentication; $ST2_API_KEY by default",
            },
            {
              name: ["--json", "-j"],
              description: "Print output in JSON format",
            },
            {
              name: ["--yaml", "-y"],
              description: "Print output in YAML format",
            },
            {
              name: ["--user", "-u"],
              description: "User under which to run the action (admins only)",
              args: {
                name: "USER",
              },
            },
          ],
          args: {
            name: "ref-or-id",
            description: "Reference or ID of the action",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for st2",
    },
    {
      name: "--version",
      description: "Show version for st2",
    },
    {
      name: "--url",
      description:
        "Base URL for the API servers; assumes all servers use the same base URL and default ports are used; $ST2_BASE_URL by default",
      args: {
        name: "BASE_URL",
      },
    },
    {
      name: "--auth-url",
      description:
        "URL for the Authentication server; $ST2_AUTH_URL by default",
      args: {
        name: "AUTH_URL",
      },
    },
    {
      name: "--api-url",
      description: "URL for the API server; $ST2_API_URL by default",
      args: {
        name: "API_URL",
      },
    },
    {
      name: "--stream-url",
      description: "URL for the Stream server; $ST2_STREAM_URL by default",
      args: {
        name: "STREAM_URL",
      },
    },
    {
      name: "--api-version",
      description: "API version to use; $ST2_API_VERSION by default",
      args: {
        name: "API_VERSION",
      },
    },
    {
      name: "--cacert",
      description:
        "Path to the CA cert bundle for the SSL endpoints; $ST2_CACERT by default; if this is not provided, then SSL cert will not be verified",
      args: {
        name: "CACERT",
      },
    },
    {
      name: "--config-file",
      description: "Path to the CLI config file",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--print-config",
      description: "Parse the config file and print the values",
    },
    {
      name: "--skip-config",
      description: "Don't parse and use the CLI config file",
    },
    {
      name: "--debug",
      description: "Enable debug mode",
    },
  ],
};
export default completionSpec;
