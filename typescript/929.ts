function numUniqueEmails(emails: string[]): number {
    const valid = new Set();
    emails.forEach(email => {
        const [local, domain] = email.split("@");
        const afterStr = local.split("+")[0].split(".").filter(e => e !== ".").join("");
        valid.add(`${afterStr}@${domain}`);
    })
    return valid.size;
};