function skilsMembers()
{
    var members = [
        {name: 'John', skills: ['javascript', 'html', 'css', 'java', 'c']},
        {name: 'Jane', skills: ['javascript', 'nodejs', 'angular']},
        {name: 'Peter', skills: ['javascript', 'html', 'css', 'java', 'php']},
        {name: 'Mary', skills: ['javascript', 'html', 'css', 'nodejs', 'angular', 'react']}
    ];

    var count = members.filter(function(member){
        return member.skills.length > 3;
    }).length;

    console.log(count);
}