def solution(participant, completion):
    answerString = ''
    set_participant = set(participant)
    set_completion = set(completion)
    
    if len(participant) > len(set_participant):
      for person in participant:
        if participant.count(person) > 1 and person in set_participant:
          return str(person)
    
    answerSet = set_participant - set_completion
    answerList = list(answerSet)
    return answerString.join(answerList)

print(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))