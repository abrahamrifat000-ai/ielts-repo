export function timeRemaining(session, now=Date.now()) {
  return session.running && session.deadline
    ? Math.max(0, Math.ceil((session.deadline-now)/1000))
    : session.remaining;
}
