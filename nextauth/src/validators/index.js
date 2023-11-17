export const validateZodInput = (payload, schema, isArrayErrorResult = false) => {
    try {
        const parseResult = schema.parse(payload)
        return { isError: false, data: parseResult, message: "success" }
    } catch (error) {
      const errors = {}
      let issues = error.issues
      const message = issues?.map(issue => issue.message)?.join("\r\n")
      if(isArrayErrorResult){
        issues = issues.map(issue => issue.message)
        return { isError: true, message, data: issues}
      }
      for (const issue of issues){
        errors[issue?.path[0]] = issue.message
      }
      return {isError: true, message, data: errors}
    }
}
